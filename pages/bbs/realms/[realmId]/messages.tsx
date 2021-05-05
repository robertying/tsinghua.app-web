import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { LoadingButton } from "@material-ui/lab";
import { Menu } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/client";
import uniqBy from "lodash/uniqBy";
import { ADD_MESSAGE, GET_MESSAGES, GET_MESSAGE_CONTACTS } from "api/message";
import { GET_REALM_USER_DETAILS } from "api/user";
import {
  AddMessage,
  AddMessageVariables,
  GetMessageContacts,
  GetMessageContactsVariables,
  GetMessageContacts_message_from_user,
  GetMessages,
  GetMessagesVariables,
  GetRealmUserDetails,
  GetRealmUserDetailsVariables,
  GetRealmUserDetails_realm_user_union,
} from "api/types";
import MyAvatar from "components/Avatar";
import MessageBubble from "components/MessageBubble";
import { useToast } from "components/Snackbar";
import { useUser } from "lib/session";

const getContactList = (userId?: string, contactData?: GetMessageContacts) => {
  return userId && contactData
    ? uniqBy(
        contactData.message.map((m) => {
          if (m.from_user!.user_id === userId) {
            return m.to_user!;
          }
          if (m.to_user!.user_id === userId) {
            return m.from_user!;
          }
          return m.from_user!;
        }),
        "user_id"
      )
    : [];
};

const RealmMessages: React.FC = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const toast = useToast();

  const router = useRouter();
  const realmId = router.query.realmId as string | undefined;
  const initialSelectedUserId = router.query.user as string | undefined;

  const [user, authLoading] = useUser();

  const containerRef = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedContactIndex, setSelectedContactIndex] = useState(0);
  const [selectedContact, setSelectedContact] = useState<
    | (
        | GetRealmUserDetails_realm_user_union
        | GetMessageContacts_message_from_user
      )
    | undefined
  >(undefined);
  const [text, setText] = useState("");

  const {
    data: contactData,
    error: contactError,
    loading: contactLoading,
    refetch: refetchContacts,
  } = useQuery<GetMessageContacts, GetMessageContactsVariables>(
    GET_MESSAGE_CONTACTS,
    {
      variables: {
        realmId: parseInt(realmId!, 10),
        userId: user?.id!,
      },
      skip: !realmId || !user,
    }
  );
  const contactList = useMemo(() => getContactList(user?.id, contactData), [
    contactData,
    user,
  ]);

  const { data: realmUserData, loading: realmUserLoading } = useQuery<
    GetRealmUserDetails,
    GetRealmUserDetailsVariables
  >(GET_REALM_USER_DETAILS, {
    variables: {
      realmId: parseInt(realmId!, 10),
      userId: initialSelectedUserId!,
    },
    skip: !realmId || !initialSelectedUserId,
  });

  const {
    data: messageData,
    error: messageError,
    loading: messageLoading,
    refetch: refetchMessages,
  } = useQuery<GetMessages, GetMessagesVariables>(GET_MESSAGES, {
    variables: {
      realmId: parseInt(realmId!, 10),
      userId1: user?.id!,
      userId2: selectedContact?.user_id!,
    },
    skip: !realmId || !user || !selectedContact,
    pollInterval: 1 * 1000, // 1s
  });

  const [
    addMessage,
    {
      data: addMessageData,
      error: addMessageError,
      loading: addMessageLoading,
    },
  ] = useMutation<AddMessage, AddMessageVariables>(ADD_MESSAGE);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMessageSend = () => {
    if (!text) {
      return;
    }

    addMessage({
      variables: {
        realmId: parseInt(realmId!, 10),
        fromUserId: user?.id!,
        toUserId: selectedContact?.user_id!,
        text,
      },
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (initialSelectedUserId) {
      const index = contactList.findIndex(
        (c) => c.user_id === initialSelectedUserId
      );
      setSelectedContactIndex(index);
    }
  }, [contactList, initialSelectedUserId]);

  useEffect(() => {
    const contact = contactList[selectedContactIndex];
    if (!contact) {
      setSelectedContact(realmUserData?.realm_user_union?.[0]);
    } else {
      setSelectedContact(contact);
    }
  }, [contactList, initialSelectedUserId, realmUserData, selectedContactIndex]);

  useEffect(() => {
    if (addMessageData) {
      setText("");
      refetchMessages();
    }
  }, [addMessageData, refetchMessages]);

  useEffect(() => {
    if (addMessageData) {
      if (!contactList.find((c) => c.user_id === selectedContact?.user_id)) {
        refetchContacts();
      }
    }
  }, [addMessageData, contactList, refetchContacts, selectedContact?.user_id]);

  useEffect(() => {
    if (contactError) {
      toast("error", "联系人获取失败");
    }
  }, [contactError, toast]);

  useEffect(() => {
    if (messageError) {
      toast("error", "消息获取失败");
    }
  }, [messageError, toast]);

  useEffect(() => {
    if (addMessageError) {
      toast("error", "消息发送失败");
    }
  }, [addMessageError, toast]);

  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  const drawer = contactLoading ? (
    <CircularProgress size="2rem" sx={{ mx: "auto", display: "block" }} />
  ) : (
    <List sx={{ maxWidth: "50vw" }}>
      {contactList.length === 0 && (
        <ListItem>
          <ListItemText sx={{ fontStyle: "italic" }} primary="无最近联系人" />
        </ListItem>
      )}
      {contactList.map((c, i) => (
        <ListItem
          key={c.user_id}
          button
          selected={i === selectedContactIndex}
          onClick={(e) => setSelectedContactIndex(i)}
        >
          <ListItemAvatar>
            <MyAvatar
              size="medium"
              alt={c.username ?? undefined}
              src={c.avatar_url ?? undefined}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ overflowWrap: "break-word" }}
            primary={c.username}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <NextSeo
        title={
          selectedContact
            ? `${selectedContact.username} - 消息 - ${selectedContact.realm?.name}`
            : "消息"
        }
      />
      <Container
        ref={containerRef}
        sx={{
          pt: 8,
          pb: 2,
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
        maxWidth="sm"
      >
        <Box
          component="nav"
          sx={{
            flex: smUp ? 1 : 0,
            overflowY: "auto",
          }}
        >
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
            <Tooltip title="联系人" placement="right">
              <IconButton
                sx={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                }}
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Tooltip>
          </Hidden>
          <Hidden smDown implementation="css">
            {drawer}
          </Hidden>
        </Box>
        <Hidden smDown implementation="css">
          <Divider orientation="vertical" />
        </Hidden>
        <Box
          component="main"
          sx={{
            flex: 2,
            overflowY: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {contactLoading || realmUserLoading ? (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size="2rem" />
            </Box>
          ) : selectedContact ? (
            <>
              <Stack
                sx={{ p: 2 }}
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <MyAvatar
                  size="medium"
                  src={selectedContact.avatar_url ?? undefined}
                  alt={selectedContact.username ?? undefined}
                />
                <Typography variant="h5" component="div">
                  {selectedContact.username}
                </Typography>
              </Stack>
              <Divider flexItem />
              <Stack
                sx={{ overflowY: "auto", flex: 1, p: 2 }}
                direction="column-reverse"
                spacing={1.5}
              >
                {messageLoading && !addMessageLoading && (
                  <CircularProgress
                    size="1.5rem"
                    sx={{ alignSelf: "center" }}
                  />
                )}
                {messageData?.message.map((m) => (
                  <MessageBubble
                    key={m.id}
                    position={m.from_user_id === user?.id ? "right" : "left"}
                    text={m.text!}
                    createdAt={m.created_at!}
                  />
                ))}
              </Stack>
              <Divider flexItem />
              <Stack
                sx={{ mt: 1, px: 2 }}
                direction="row"
                alignItems="stretch"
                spacing={2}
              >
                <TextField
                  sx={{ flex: 1 }}
                  placeholder="新消息"
                  multiline
                  maxRows={5}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <LoadingButton
                  loading={addMessageLoading}
                  disabled={!text}
                  variant="contained"
                  onClick={handleMessageSend}
                >
                  发送
                </LoadingButton>
              </Stack>
            </>
          ) : null}
        </Box>
      </Container>
    </>
  );
};

export default RealmMessages;
