// AUTO-GENERATED FILE — DO NOT EDIT

export const META = {
  "version": "Bot API 9.3",
  "release_date": "December 31, 2025",
  "changelog": "https://core.telegram.org/bots/api#december-31-2025"
};

export const METHODS = [
  {
    "name": "getUpdates",
    "href": "https://core.telegram.org/bots/api#getupdates",
    "description": "Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.",
    "returns": "Array of Update",
    "params": [
      {
        "name": "offset",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten."
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100."
      },
      {
        "name": "timeout",
        "typesLabel": "Integer",
        "required": false,
        "description": "Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only."
      },
      {
        "name": "allowed_updates",
        "typesLabel": "Array of String",
        "required": false,
        "description": "A JSON-serialized list of the update types you want your bot to receive. For example, specify [\"message\", \"edited_channel_post\", \"callback_query\"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "offset": 123456789,
      "limit": 123456789,
      "timeout": 123456789,
      "allowed_updates": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getUpdates\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setWebhook",
    "href": "https://core.telegram.org/bots/api#setwebhook",
    "description": "Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.\nIf you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header \"X-Telegram-Bot-Api-Secret-Token\" with the secret token as content.",
    "returns": "Boolean",
    "params": [
      {
        "name": "url",
        "typesLabel": "String",
        "required": true,
        "description": "HTTPS URL to send updates to. Use an empty string to remove webhook integration"
      },
      {
        "name": "certificate",
        "typesLabel": "InputFile",
        "required": false,
        "description": "Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details."
      },
      {
        "name": "ip_address",
        "typesLabel": "String",
        "required": false,
        "description": "The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS"
      },
      {
        "name": "max_connections",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput."
      },
      {
        "name": "allowed_updates",
        "typesLabel": "Array of String",
        "required": false,
        "description": "A JSON-serialized list of the update types you want your bot to receive. For example, specify [\"message\", \"edited_channel_post\", \"callback_query\"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time."
      },
      {
        "name": "drop_pending_updates",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to drop all pending updates"
      },
      {
        "name": "secret_token",
        "typesLabel": "String",
        "required": false,
        "description": "A secret token to be sent in a header \"X-Telegram-Bot-Api-Secret-Token\" in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you."
      }
    ],
    "jsonRequired": {
      "url": "example"
    },
    "jsonFull": {
      "url": "example",
      "certificate": "https://example.com/file.jpg",
      "ip_address": "example",
      "max_connections": 123456789,
      "allowed_updates": [],
      "drop_pending_updates": false,
      "secret_token": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setWebhook\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"url\": \"example\"\n}'"
  },
  {
    "name": "deleteWebhook",
    "href": "https://core.telegram.org/bots/api#deletewebhook",
    "description": "Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "drop_pending_updates",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to drop all pending updates"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "drop_pending_updates": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteWebhook\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getWebhookInfo",
    "href": "https://core.telegram.org/bots/api#getwebhookinfo",
    "description": "Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.",
    "returns": "WebhookInfo",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getWebhookInfo\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMe",
    "href": "https://core.telegram.org/bots/api#getme",
    "description": "A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.",
    "returns": "User",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMe\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "logOut",
    "href": "https://core.telegram.org/bots/api#logout",
    "description": "Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.",
    "returns": "Boolean",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/logOut\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "close",
    "href": "https://core.telegram.org/bots/api#close",
    "description": "Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.",
    "returns": "Boolean",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/close\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "sendMessage",
    "href": "https://core.telegram.org/bots/api#sendmessage",
    "description": "Use this method to send text messages. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": true,
        "description": "Text of the message to be sent, 1-4096 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the message text. See formatting options for more details."
      },
      {
        "name": "entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode"
      },
      {
        "name": "link_preview_options",
        "typesLabel": "LinkPreviewOptions",
        "required": false,
        "description": "Link preview generation options for the message"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "text": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "text": "example",
      "parse_mode": "example",
      "entities": [],
      "link_preview_options": {},
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"text\": \"example\"\n}'"
  },
  {
    "name": "forwardMessage",
    "href": "https://core.telegram.org/bots/api#forwardmessage",
    "description": "Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat"
      },
      {
        "name": "from_chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)"
      },
      {
        "name": "video_start_timestamp",
        "typesLabel": "Integer",
        "required": false,
        "description": "New start timestamp for the forwarded video in the message"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the forwarded message from forwarding and saving"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; only available when forwarding to private chats"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Message identifier in the chat specified in from_chat_id"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "from_chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "from_chat_id": 123456789,
      "video_start_timestamp": 123456789,
      "disable_notification": false,
      "protect_content": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "message_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/forwardMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"from_chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "forwardMessages",
    "href": "https://core.telegram.org/bots/api#forwardmessages",
    "description": "Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.",
    "returns": "Array of MessageId",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat"
      },
      {
        "name": "from_chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)"
      },
      {
        "name": "message_ids",
        "typesLabel": "Array of Integer",
        "required": true,
        "description": "A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the messages silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the forwarded messages from forwarding and saving"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "from_chat_id": 123456789,
      "message_ids": []
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "from_chat_id": 123456789,
      "message_ids": [],
      "disable_notification": false,
      "protect_content": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/forwardMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"from_chat_id\": 123456789,\n  \"message_ids\": []\n}'"
  },
  {
    "name": "copyMessage",
    "href": "https://core.telegram.org/bots/api#copymessage",
    "description": "Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.",
    "returns": "MessageId",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "from_chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Message identifier in the chat specified in from_chat_id"
      },
      {
        "name": "video_start_timestamp",
        "typesLabel": "Integer",
        "required": false,
        "description": "New start timestamp for the copied video in the message"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the new caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; only available when copying to private chats"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "from_chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "from_chat_id": 123456789,
      "message_id": 123456789,
      "video_start_timestamp": 123456789,
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/copyMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"from_chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "copyMessages",
    "href": "https://core.telegram.org/bots/api#copymessages",
    "description": "Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.",
    "returns": "Array of MessageId",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat"
      },
      {
        "name": "from_chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)"
      },
      {
        "name": "message_ids",
        "typesLabel": "Array of Integer",
        "required": true,
        "description": "A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the messages silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent messages from forwarding and saving"
      },
      {
        "name": "remove_caption",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to copy the messages without their captions"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "from_chat_id": 123456789,
      "message_ids": []
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "from_chat_id": 123456789,
      "message_ids": [],
      "disable_notification": false,
      "protect_content": false,
      "remove_caption": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/copyMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"from_chat_id\": 123456789,\n  \"message_ids\": []\n}'"
  },
  {
    "name": "sendPhoto",
    "href": "https://core.telegram.org/bots/api#sendphoto",
    "description": "Use this method to send photos. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "photo",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the photo caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media"
      },
      {
        "name": "has_spoiler",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the photo needs to be covered with a spoiler animation"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "photo": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "photo": "https://example.com/file.jpg",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "has_spoiler": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendPhoto\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"photo\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendAudio",
    "href": "https://core.telegram.org/bots/api#sendaudio",
    "description": "Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.\nFor sending voice messages, use the sendVoice method instead.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "audio",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Audio caption, 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the audio caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "duration",
        "typesLabel": "Integer",
        "required": false,
        "description": "Duration of the audio in seconds"
      },
      {
        "name": "performer",
        "typesLabel": "String",
        "required": false,
        "description": "Performer"
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": false,
        "description": "Track name"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "audio": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "audio": "https://example.com/file.jpg",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "duration": 123456789,
      "performer": "example",
      "title": "example",
      "thumbnail": "https://example.com/file.jpg",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendAudio\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"audio\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendDocument",
    "href": "https://core.telegram.org/bots/api#senddocument",
    "description": "Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "document",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the document caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "disable_content_type_detection",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Disables automatic server-side content type detection for files uploaded using multipart/form-data"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "document": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "document": "https://example.com/file.jpg",
      "thumbnail": "https://example.com/file.jpg",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "disable_content_type_detection": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendDocument\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"document\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendVideo",
    "href": "https://core.telegram.org/bots/api#sendvideo",
    "description": "Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "video",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "duration",
        "typesLabel": "Integer",
        "required": false,
        "description": "Duration of sent video in seconds"
      },
      {
        "name": "width",
        "typesLabel": "Integer",
        "required": false,
        "description": "Video width"
      },
      {
        "name": "height",
        "typesLabel": "Integer",
        "required": false,
        "description": "Video height"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "cover",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass \"attach://<file_attach_name>\" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "start_timestamp",
        "typesLabel": "Integer",
        "required": false,
        "description": "Start timestamp for the video in the message"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the video caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media"
      },
      {
        "name": "has_spoiler",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the video needs to be covered with a spoiler animation"
      },
      {
        "name": "supports_streaming",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the uploaded video is suitable for streaming"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "video": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "video": "https://example.com/file.jpg",
      "duration": 123456789,
      "width": 123456789,
      "height": 123456789,
      "thumbnail": "https://example.com/file.jpg",
      "cover": "https://example.com/file.jpg",
      "start_timestamp": 123456789,
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "has_spoiler": false,
      "supports_streaming": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendVideo\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"video\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendAnimation",
    "href": "https://core.telegram.org/bots/api#sendanimation",
    "description": "Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "animation",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "duration",
        "typesLabel": "Integer",
        "required": false,
        "description": "Duration of sent animation in seconds"
      },
      {
        "name": "width",
        "typesLabel": "Integer",
        "required": false,
        "description": "Animation width"
      },
      {
        "name": "height",
        "typesLabel": "Integer",
        "required": false,
        "description": "Animation height"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the animation caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media"
      },
      {
        "name": "has_spoiler",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the animation needs to be covered with a spoiler animation"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "animation": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "animation": "https://example.com/file.jpg",
      "duration": 123456789,
      "width": 123456789,
      "height": 123456789,
      "thumbnail": "https://example.com/file.jpg",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "has_spoiler": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendAnimation\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"animation\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendVoice",
    "href": "https://core.telegram.org/bots/api#sendvoice",
    "description": "Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "voice",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Voice message caption, 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the voice message caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "duration",
        "typesLabel": "Integer",
        "required": false,
        "description": "Duration of the voice message in seconds"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "voice": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "voice": "https://example.com/file.jpg",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "duration": 123456789,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendVoice\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"voice\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendVideoNote",
    "href": "https://core.telegram.org/bots/api#sendvideonote",
    "description": "As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "video_note",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL is currently unsupported"
      },
      {
        "name": "duration",
        "typesLabel": "Integer",
        "required": false,
        "description": "Duration of sent video in seconds"
      },
      {
        "name": "length",
        "typesLabel": "Integer",
        "required": false,
        "description": "Video width and height, i.e. diameter of the video message"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "video_note": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "video_note": "https://example.com/file.jpg",
      "duration": 123456789,
      "length": 123456789,
      "thumbnail": "https://example.com/file.jpg",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendVideoNote\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"video_note\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "sendPaidMedia",
    "href": "https://core.telegram.org/bots/api#sendpaidmedia",
    "description": "Use this method to send paid media. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance."
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "star_count",
        "typesLabel": "Integer",
        "required": true,
        "description": "The number of Telegram Stars that must be paid to buy access to the media; 1-25000"
      },
      {
        "name": "media",
        "typesLabel": "Array of InputPaidMedia",
        "required": true,
        "description": "A JSON-serialized array describing the media to be sent; up to 10 items"
      },
      {
        "name": "payload",
        "typesLabel": "String",
        "required": false,
        "description": "Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes."
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Media caption, 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the media caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "star_count": 123456789,
      "media": []
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "star_count": 123456789,
      "media": [],
      "payload": "example",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendPaidMedia\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"star_count\": 123456789,\n  \"media\": []\n}'"
  },
  {
    "name": "sendMediaGroup",
    "href": "https://core.telegram.org/bots/api#sendmediagroup",
    "description": "Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.",
    "returns": "Array of Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat"
      },
      {
        "name": "media",
        "typesLabel": "Array of InputMediaAudio | Array of InputMediaDocument | Array of InputMediaPhoto | Array of InputMediaVideo",
        "required": true,
        "description": "A JSON-serialized array describing messages to be sent, must include 2-10 items"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends messages silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent messages from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "media": []
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "media": [],
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "reply_parameters": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendMediaGroup\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"media\": []\n}'"
  },
  {
    "name": "sendLocation",
    "href": "https://core.telegram.org/bots/api#sendlocation",
    "description": "Use this method to send point on the map. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "latitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Latitude of the location"
      },
      {
        "name": "longitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Longitude of the location"
      },
      {
        "name": "horizontal_accuracy",
        "typesLabel": "Float",
        "required": false,
        "description": "The radius of uncertainty for the location, measured in meters; 0-1500"
      },
      {
        "name": "live_period",
        "typesLabel": "Integer",
        "required": false,
        "description": "Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely."
      },
      {
        "name": "heading",
        "typesLabel": "Integer",
        "required": false,
        "description": "For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
      },
      {
        "name": "proximity_alert_radius",
        "typesLabel": "Integer",
        "required": false,
        "description": "For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "latitude": 0.1,
      "longitude": 0.1
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "latitude": 0.1,
      "longitude": 0.1,
      "horizontal_accuracy": 0.1,
      "live_period": 123456789,
      "heading": 123456789,
      "proximity_alert_radius": 123456789,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendLocation\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"latitude\": 0.1,\n  \"longitude\": 0.1\n}'"
  },
  {
    "name": "sendVenue",
    "href": "https://core.telegram.org/bots/api#sendvenue",
    "description": "Use this method to send information about a venue. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "latitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Latitude of the venue"
      },
      {
        "name": "longitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Longitude of the venue"
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "Name of the venue"
      },
      {
        "name": "address",
        "typesLabel": "String",
        "required": true,
        "description": "Address of the venue"
      },
      {
        "name": "foursquare_id",
        "typesLabel": "String",
        "required": false,
        "description": "Foursquare identifier of the venue"
      },
      {
        "name": "foursquare_type",
        "typesLabel": "String",
        "required": false,
        "description": "Foursquare type of the venue, if known. (For example, \"arts_entertainment/default\", \"arts_entertainment/aquarium\" or \"food/icecream\".)"
      },
      {
        "name": "google_place_id",
        "typesLabel": "String",
        "required": false,
        "description": "Google Places identifier of the venue"
      },
      {
        "name": "google_place_type",
        "typesLabel": "String",
        "required": false,
        "description": "Google Places type of the venue. (See supported types.)"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "latitude": 0.1,
      "longitude": 0.1,
      "title": "example",
      "address": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "latitude": 0.1,
      "longitude": 0.1,
      "title": "example",
      "address": "example",
      "foursquare_id": "example",
      "foursquare_type": "example",
      "google_place_id": "example",
      "google_place_type": "example",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendVenue\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"latitude\": 0.1,\n  \"longitude\": 0.1,\n  \"title\": \"example\",\n  \"address\": \"example\"\n}'"
  },
  {
    "name": "sendContact",
    "href": "https://core.telegram.org/bots/api#sendcontact",
    "description": "Use this method to send phone contacts. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "phone_number",
        "typesLabel": "String",
        "required": true,
        "description": "Contact's phone number"
      },
      {
        "name": "first_name",
        "typesLabel": "String",
        "required": true,
        "description": "Contact's first name"
      },
      {
        "name": "last_name",
        "typesLabel": "String",
        "required": false,
        "description": "Contact's last name"
      },
      {
        "name": "vcard",
        "typesLabel": "String",
        "required": false,
        "description": "Additional data about the contact in the form of a vCard, 0-2048 bytes"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "phone_number": "example",
      "first_name": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "phone_number": "example",
      "first_name": "example",
      "last_name": "example",
      "vcard": "example",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendContact\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"phone_number\": \"example\",\n  \"first_name\": \"example\"\n}'"
  },
  {
    "name": "sendPoll",
    "href": "https://core.telegram.org/bots/api#sendpoll",
    "description": "Use this method to send a native poll. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can't be sent to channel direct messages chats."
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "question",
        "typesLabel": "String",
        "required": true,
        "description": "Poll question, 1-300 characters"
      },
      {
        "name": "question_parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed"
      },
      {
        "name": "question_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode"
      },
      {
        "name": "options",
        "typesLabel": "Array of InputPollOption",
        "required": true,
        "description": "A JSON-serialized list of 2-12 answer options"
      },
      {
        "name": "is_anonymous",
        "typesLabel": "Boolean",
        "required": false,
        "description": "True, if the poll needs to be anonymous, defaults to True"
      },
      {
        "name": "type",
        "typesLabel": "String",
        "required": false,
        "description": "Poll type, \"quiz\" or \"regular\", defaults to \"regular\""
      },
      {
        "name": "allows_multiple_answers",
        "typesLabel": "Boolean",
        "required": false,
        "description": "True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False"
      },
      {
        "name": "correct_option_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "0-based identifier of the correct answer option, required for polls in quiz mode"
      },
      {
        "name": "explanation",
        "typesLabel": "String",
        "required": false,
        "description": "Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing"
      },
      {
        "name": "explanation_parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the explanation. See formatting options for more details."
      },
      {
        "name": "explanation_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode"
      },
      {
        "name": "open_period",
        "typesLabel": "Integer",
        "required": false,
        "description": "Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date."
      },
      {
        "name": "close_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period."
      },
      {
        "name": "is_closed",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the poll needs to be immediately closed. This can be useful for poll preview."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "question": "example",
      "options": []
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "question": "example",
      "question_parse_mode": "example",
      "question_entities": [],
      "options": [],
      "is_anonymous": false,
      "type": "example",
      "allows_multiple_answers": false,
      "correct_option_id": 123456789,
      "explanation": "example",
      "explanation_parse_mode": "example",
      "explanation_entities": [],
      "open_period": 123456789,
      "close_date": 123456789,
      "is_closed": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendPoll\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"question\": \"example\",\n  \"options\": []\n}'"
  },
  {
    "name": "sendChecklist",
    "href": "https://core.telegram.org/bots/api#sendchecklist",
    "description": "Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target chat"
      },
      {
        "name": "checklist",
        "typesLabel": "InputChecklist",
        "required": true,
        "description": "A JSON-serialized object for the checklist to send"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message"
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "A JSON-serialized object for description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "checklist": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "checklist": {},
      "disable_notification": false,
      "protect_content": false,
      "message_effect_id": "example",
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendChecklist\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"chat_id\": 123456789,\n  \"checklist\": {}\n}'"
  },
  {
    "name": "sendDice",
    "href": "https://core.telegram.org/bots/api#senddice",
    "description": "Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "emoji",
        "typesLabel": "String",
        "required": false,
        "description": "Emoji on which the dice throw animation is based. Currently, must be one of \"🎲\", \"🎯\", \"🏀\", \"⚽\", \"🎳\", or \"🎰\". Dice can have values 1-6 for \"🎲\", \"🎯\" and \"🎳\", values 1-5 for \"🏀\" and \"⚽\", and values 1-64 for \"🎰\". Defaults to \"🎲\""
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "emoji": "example",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendDice\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "sendMessageDraft",
    "href": "https://core.telegram.org/bots/api#sendmessagedraft",
    "description": "Use this method to stream a partial message to a user while the message is being generated; supported only for bots with forum topic mode enabled. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target private chat"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread"
      },
      {
        "name": "draft_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the message draft; must be non-zero. Changes of drafts with the same identifier are animated"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": true,
        "description": "Text of the message to be sent, 1-4096 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the message text. See formatting options for more details."
      },
      {
        "name": "entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "draft_id": 123456789,
      "text": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "draft_id": 123456789,
      "text": "example",
      "parse_mode": "example",
      "entities": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendMessageDraft\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"draft_id\": 123456789,\n  \"text\": \"example\"\n}'"
  },
  {
    "name": "sendChatAction",
    "href": "https://core.telegram.org/bots/api#sendchataction",
    "description": "Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.\nWe only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the action will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported."
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread or topic of a forum; for supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "action",
        "typesLabel": "String",
        "required": true,
        "description": "Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "action": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "action": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendChatAction\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"action\": \"example\"\n}'"
  },
  {
    "name": "setMessageReaction",
    "href": "https://core.telegram.org/bots/api#setmessagereaction",
    "description": "Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead."
      },
      {
        "name": "reaction",
        "typesLabel": "Array of ReactionType",
        "required": false,
        "description": "A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots."
      },
      {
        "name": "is_big",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to set the reaction with a big animation"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_id": 123456789,
      "reaction": [],
      "is_big": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMessageReaction\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "getUserProfilePhotos",
    "href": "https://core.telegram.org/bots/api#getuserprofilephotos",
    "description": "Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.",
    "returns": "UserProfilePhotos",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "offset",
        "typesLabel": "Integer",
        "required": false,
        "description": "Sequential number of the first photo to be returned. By default, all photos are returned."
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "offset": 123456789,
      "limit": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getUserProfilePhotos\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "setUserEmojiStatus",
    "href": "https://core.telegram.org/bots/api#setuseremojistatus",
    "description": "Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "emoji_status_custom_emoji_id",
        "typesLabel": "String",
        "required": false,
        "description": "Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status."
      },
      {
        "name": "emoji_status_expiration_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Expiration date of the emoji status, if any"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "emoji_status_custom_emoji_id": "example",
      "emoji_status_expiration_date": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setUserEmojiStatus\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "getFile",
    "href": "https://core.telegram.org/bots/api#getfile",
    "description": "Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.\nNote: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.",
    "returns": "File",
    "params": [
      {
        "name": "file_id",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier to get information about"
      }
    ],
    "jsonRequired": {
      "file_id": "example"
    },
    "jsonFull": {
      "file_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getFile\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"file_id\": \"example\"\n}'"
  },
  {
    "name": "banChatMember",
    "href": "https://core.telegram.org/bots/api#banchatmember",
    "description": "Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "until_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only."
      },
      {
        "name": "revoke_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "until_date": 123456789,
      "revoke_messages": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/banChatMember\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "unbanChatMember",
    "href": "https://core.telegram.org/bots/api#unbanchatmember",
    "description": "Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "only_if_banned",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Do nothing if the user is not banned"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "only_if_banned": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unbanChatMember\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "restrictChatMember",
    "href": "https://core.telegram.org/bots/api#restrictchatmember",
    "description": "Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "permissions",
        "typesLabel": "ChatPermissions",
        "required": true,
        "description": "A JSON-serialized object for new user permissions"
      },
      {
        "name": "use_independent_chat_permissions",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission."
      },
      {
        "name": "until_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "permissions": {}
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "permissions": {},
      "use_independent_chat_permissions": false,
      "until_date": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/restrictChatMember\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789,\n  \"permissions\": {}\n}'"
  },
  {
    "name": "promoteChatMember",
    "href": "https://core.telegram.org/bots/api#promotechatmember",
    "description": "Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "is_anonymous",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator's presence in the chat is hidden"
      },
      {
        "name": "can_manage_chat",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege."
      },
      {
        "name": "can_delete_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can delete messages of other users"
      },
      {
        "name": "can_manage_video_chats",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can manage video chats"
      },
      {
        "name": "can_restrict_members",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to True for promotions of channel administrators"
      },
      {
        "name": "can_promote_members",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)"
      },
      {
        "name": "can_change_info",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can change chat title, photo and other settings"
      },
      {
        "name": "can_invite_users",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can invite new users to the chat"
      },
      {
        "name": "can_post_stories",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can post stories to the chat"
      },
      {
        "name": "can_edit_stories",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive"
      },
      {
        "name": "can_delete_stories",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can delete stories posted by other users"
      },
      {
        "name": "can_post_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only"
      },
      {
        "name": "can_edit_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can edit messages of other users and can pin messages; for channels only"
      },
      {
        "name": "can_pin_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can pin messages; for supergroups only"
      },
      {
        "name": "can_manage_topics",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only"
      },
      {
        "name": "can_manage_direct_messages",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "is_anonymous": false,
      "can_manage_chat": false,
      "can_delete_messages": false,
      "can_manage_video_chats": false,
      "can_restrict_members": false,
      "can_promote_members": false,
      "can_change_info": false,
      "can_invite_users": false,
      "can_post_stories": false,
      "can_edit_stories": false,
      "can_delete_stories": false,
      "can_post_messages": false,
      "can_edit_messages": false,
      "can_pin_messages": false,
      "can_manage_topics": false,
      "can_manage_direct_messages": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/promoteChatMember\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "setChatAdministratorCustomTitle",
    "href": "https://core.telegram.org/bots/api#setchatadministratorcustomtitle",
    "description": "Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "custom_title",
        "typesLabel": "String",
        "required": true,
        "description": "New custom title for the administrator; 0-16 characters, emoji are not allowed"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "custom_title": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789,
      "custom_title": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatAdministratorCustomTitle\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789,\n  \"custom_title\": \"example\"\n}'"
  },
  {
    "name": "banChatSenderChat",
    "href": "https://core.telegram.org/bots/api#banchatsenderchat",
    "description": "Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "sender_chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target sender chat"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "sender_chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "sender_chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/banChatSenderChat\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"sender_chat_id\": 123456789\n}'"
  },
  {
    "name": "unbanChatSenderChat",
    "href": "https://core.telegram.org/bots/api#unbanchatsenderchat",
    "description": "Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "sender_chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target sender chat"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "sender_chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "sender_chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unbanChatSenderChat\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"sender_chat_id\": 123456789\n}'"
  },
  {
    "name": "setChatPermissions",
    "href": "https://core.telegram.org/bots/api#setchatpermissions",
    "description": "Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "permissions",
        "typesLabel": "ChatPermissions",
        "required": true,
        "description": "A JSON-serialized object for new default chat permissions"
      },
      {
        "name": "use_independent_chat_permissions",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "permissions": {}
    },
    "jsonFull": {
      "chat_id": 123456789,
      "permissions": {},
      "use_independent_chat_permissions": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatPermissions\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"permissions\": {}\n}'"
  },
  {
    "name": "exportChatInviteLink",
    "href": "https://core.telegram.org/bots/api#exportchatinvitelink",
    "description": "Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.",
    "returns": "String",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/exportChatInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "createChatInviteLink",
    "href": "https://core.telegram.org/bots/api#createchatinvitelink",
    "description": "Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.",
    "returns": "ChatInviteLink",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "Invite link name; 0-32 characters"
      },
      {
        "name": "expire_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Point in time (Unix timestamp) when the link will expire"
      },
      {
        "name": "member_limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999"
      },
      {
        "name": "creates_join_request",
        "typesLabel": "Boolean",
        "required": false,
        "description": "True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "name": "example",
      "expire_date": 123456789,
      "member_limit": 123456789,
      "creates_join_request": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/createChatInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "editChatInviteLink",
    "href": "https://core.telegram.org/bots/api#editchatinvitelink",
    "description": "Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.",
    "returns": "ChatInviteLink",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "invite_link",
        "typesLabel": "String",
        "required": true,
        "description": "The invite link to edit"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "Invite link name; 0-32 characters"
      },
      {
        "name": "expire_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Point in time (Unix timestamp) when the link will expire"
      },
      {
        "name": "member_limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999"
      },
      {
        "name": "creates_join_request",
        "typesLabel": "Boolean",
        "required": false,
        "description": "True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "invite_link": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "invite_link": "example",
      "name": "example",
      "expire_date": 123456789,
      "member_limit": 123456789,
      "creates_join_request": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editChatInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"invite_link\": \"example\"\n}'"
  },
  {
    "name": "createChatSubscriptionInviteLink",
    "href": "https://core.telegram.org/bots/api#createchatsubscriptioninvitelink",
    "description": "Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.",
    "returns": "ChatInviteLink",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "Invite link name; 0-32 characters"
      },
      {
        "name": "subscription_period",
        "typesLabel": "Integer",
        "required": true,
        "description": "The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days)."
      },
      {
        "name": "subscription_price",
        "typesLabel": "Integer",
        "required": true,
        "description": "The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "subscription_period": 123456789,
      "subscription_price": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "name": "example",
      "subscription_period": 123456789,
      "subscription_price": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/createChatSubscriptionInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"subscription_period\": 123456789,\n  \"subscription_price\": 123456789\n}'"
  },
  {
    "name": "editChatSubscriptionInviteLink",
    "href": "https://core.telegram.org/bots/api#editchatsubscriptioninvitelink",
    "description": "Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.",
    "returns": "ChatInviteLink",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "invite_link",
        "typesLabel": "String",
        "required": true,
        "description": "The invite link to edit"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "Invite link name; 0-32 characters"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "invite_link": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "invite_link": "example",
      "name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editChatSubscriptionInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"invite_link\": \"example\"\n}'"
  },
  {
    "name": "revokeChatInviteLink",
    "href": "https://core.telegram.org/bots/api#revokechatinvitelink",
    "description": "Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.",
    "returns": "ChatInviteLink",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier of the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "invite_link",
        "typesLabel": "String",
        "required": true,
        "description": "The invite link to revoke"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "invite_link": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "invite_link": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/revokeChatInviteLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"invite_link\": \"example\"\n}'"
  },
  {
    "name": "approveChatJoinRequest",
    "href": "https://core.telegram.org/bots/api#approvechatjoinrequest",
    "description": "Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/approveChatJoinRequest\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "declineChatJoinRequest",
    "href": "https://core.telegram.org/bots/api#declinechatjoinrequest",
    "description": "Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/declineChatJoinRequest\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "setChatPhoto",
    "href": "https://core.telegram.org/bots/api#setchatphoto",
    "description": "Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "photo",
        "typesLabel": "InputFile",
        "required": true,
        "description": "New chat photo, uploaded using multipart/form-data"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "photo": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "photo": "https://example.com/file.jpg"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatPhoto\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"photo\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "deleteChatPhoto",
    "href": "https://core.telegram.org/bots/api#deletechatphoto",
    "description": "Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteChatPhoto\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "setChatTitle",
    "href": "https://core.telegram.org/bots/api#setchattitle",
    "description": "Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "New chat title, 1-128 characters"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "title": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "title": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatTitle\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"title\": \"example\"\n}'"
  },
  {
    "name": "setChatDescription",
    "href": "https://core.telegram.org/bots/api#setchatdescription",
    "description": "Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "description",
        "typesLabel": "String",
        "required": false,
        "description": "New chat description, 0-255 characters"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "description": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatDescription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "pinChatMessage",
    "href": "https://core.telegram.org/bots/api#pinchatmessage",
    "description": "Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the 'can_pin_messages' right or the 'can_edit_messages' right to pin messages in groups and channels respectively. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be pinned"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of a message to pin"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "disable_notification": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/pinChatMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "unpinChatMessage",
    "href": "https://core.telegram.org/bots/api#unpinchatmessage",
    "description": "Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the 'can_pin_messages' right or the 'can_edit_messages' right to unpin messages in groups and channels respectively. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be unpinned"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unpinChatMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "unpinAllChatMessages",
    "href": "https://core.telegram.org/bots/api#unpinallchatmessages",
    "description": "Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the 'can_pin_messages' right or the 'can_edit_messages' right to unpin all pinned messages in groups and channels respectively. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unpinAllChatMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "leaveChat",
    "href": "https://core.telegram.org/bots/api#leavechat",
    "description": "Use this method for your bot to leave a group, supergroup or channel. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). Channel direct messages chats aren't supported; leave the corresponding channel instead."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/leaveChat\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "getChat",
    "href": "https://core.telegram.org/bots/api#getchat",
    "description": "Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.",
    "returns": "ChatFullInfo",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChat\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "getChatAdministrators",
    "href": "https://core.telegram.org/bots/api#getchatadministrators",
    "description": "Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.",
    "returns": "Array of ChatMember",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChatAdministrators\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "getChatMemberCount",
    "href": "https://core.telegram.org/bots/api#getchatmembercount",
    "description": "Use this method to get the number of members in a chat. Returns Int on success.",
    "returns": "Integer",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChatMemberCount\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "getChatMember",
    "href": "https://core.telegram.org/bots/api#getchatmember",
    "description": "Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.",
    "returns": "ChatMember",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChatMember\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "setChatStickerSet",
    "href": "https://core.telegram.org/bots/api#setchatstickerset",
    "description": "Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "sticker_set_name",
        "typesLabel": "String",
        "required": true,
        "description": "Name of the sticker set to be set as the group sticker set"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "sticker_set_name": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "sticker_set_name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatStickerSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"sticker_set_name\": \"example\"\n}'"
  },
  {
    "name": "deleteChatStickerSet",
    "href": "https://core.telegram.org/bots/api#deletechatstickerset",
    "description": "Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteChatStickerSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "getForumTopicIconStickers",
    "href": "https://core.telegram.org/bots/api#getforumtopiciconstickers",
    "description": "Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.",
    "returns": "Array of Sticker",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getForumTopicIconStickers\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "createForumTopic",
    "href": "https://core.telegram.org/bots/api#createforumtopic",
    "description": "Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.",
    "returns": "ForumTopic",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Topic name, 1-128 characters"
      },
      {
        "name": "icon_color",
        "typesLabel": "Integer",
        "required": false,
        "description": "Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)"
      },
      {
        "name": "icon_custom_emoji_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "name": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "name": "example",
      "icon_color": 123456789,
      "icon_custom_emoji_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/createForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"name\": \"example\"\n}'"
  },
  {
    "name": "editForumTopic",
    "href": "https://core.telegram.org/bots/api#editforumtopic",
    "description": "Use this method to edit name and icon of a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message thread of the forum topic"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept"
      },
      {
        "name": "icon_custom_emoji_id",
        "typesLabel": "String",
        "required": false,
        "description": "New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "name": "example",
      "icon_custom_emoji_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_thread_id\": 123456789\n}'"
  },
  {
    "name": "closeForumTopic",
    "href": "https://core.telegram.org/bots/api#closeforumtopic",
    "description": "Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message thread of the forum topic"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/closeForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_thread_id\": 123456789\n}'"
  },
  {
    "name": "reopenForumTopic",
    "href": "https://core.telegram.org/bots/api#reopenforumtopic",
    "description": "Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message thread of the forum topic"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/reopenForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_thread_id\": 123456789\n}'"
  },
  {
    "name": "deleteForumTopic",
    "href": "https://core.telegram.org/bots/api#deleteforumtopic",
    "description": "Use this method to delete a forum topic along with all its messages in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message thread of the forum topic"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_thread_id\": 123456789\n}'"
  },
  {
    "name": "unpinAllForumTopicMessages",
    "href": "https://core.telegram.org/bots/api#unpinallforumtopicmessages",
    "description": "Use this method to clear the list of pinned messages in a forum topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message thread of the forum topic"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unpinAllForumTopicMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_thread_id\": 123456789\n}'"
  },
  {
    "name": "editGeneralForumTopic",
    "href": "https://core.telegram.org/bots/api#editgeneralforumtopic",
    "description": "Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "New topic name, 1-128 characters"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "name": "example"
    },
    "jsonFull": {
      "chat_id": 123456789,
      "name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editGeneralForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"name\": \"example\"\n}'"
  },
  {
    "name": "closeGeneralForumTopic",
    "href": "https://core.telegram.org/bots/api#closegeneralforumtopic",
    "description": "Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/closeGeneralForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "reopenGeneralForumTopic",
    "href": "https://core.telegram.org/bots/api#reopengeneralforumtopic",
    "description": "Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/reopenGeneralForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "hideGeneralForumTopic",
    "href": "https://core.telegram.org/bots/api#hidegeneralforumtopic",
    "description": "Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/hideGeneralForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "unhideGeneralForumTopic",
    "href": "https://core.telegram.org/bots/api#unhidegeneralforumtopic",
    "description": "Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unhideGeneralForumTopic\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "unpinAllGeneralForumTopicMessages",
    "href": "https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages",
    "description": "Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/unpinAllGeneralForumTopicMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "answerCallbackQuery",
    "href": "https://core.telegram.org/bots/api#answercallbackquery",
    "description": "Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.",
    "returns": "Boolean",
    "params": [
      {
        "name": "callback_query_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier for the query to be answered"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": false,
        "description": "Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters"
      },
      {
        "name": "show_alert",
        "typesLabel": "Boolean",
        "required": false,
        "description": "If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false."
      },
      {
        "name": "url",
        "typesLabel": "String",
        "required": false,
        "description": "URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter."
      },
      {
        "name": "cache_time",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0."
      }
    ],
    "jsonRequired": {
      "callback_query_id": "example"
    },
    "jsonFull": {
      "callback_query_id": "example",
      "text": "example",
      "show_alert": false,
      "url": "example",
      "cache_time": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/answerCallbackQuery\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"callback_query_id\": \"example\"\n}'"
  },
  {
    "name": "getUserChatBoosts",
    "href": "https://core.telegram.org/bots/api#getuserchatboosts",
    "description": "Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.",
    "returns": "UserChatBoosts",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the chat or username of the channel (in the format @channelusername)"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "user_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getUserChatBoosts\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "getBusinessConnection",
    "href": "https://core.telegram.org/bots/api#getbusinessconnection",
    "description": "Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.",
    "returns": "BusinessConnection",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getBusinessConnection\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "setMyCommands",
    "href": "https://core.telegram.org/bots/api#setmycommands",
    "description": "Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "commands",
        "typesLabel": "Array of BotCommand",
        "required": true,
        "description": "A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified."
      },
      {
        "name": "scope",
        "typesLabel": "BotCommandScope",
        "required": false,
        "description": "A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands"
      }
    ],
    "jsonRequired": {
      "commands": []
    },
    "jsonFull": {
      "commands": [],
      "scope": {},
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMyCommands\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"commands\": []\n}'"
  },
  {
    "name": "deleteMyCommands",
    "href": "https://core.telegram.org/bots/api#deletemycommands",
    "description": "Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "scope",
        "typesLabel": "BotCommandScope",
        "required": false,
        "description": "A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "scope": {},
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteMyCommands\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMyCommands",
    "href": "https://core.telegram.org/bots/api#getmycommands",
    "description": "Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.",
    "returns": "Array of BotCommand",
    "params": [
      {
        "name": "scope",
        "typesLabel": "BotCommandScope",
        "required": false,
        "description": "A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code or an empty string"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "scope": {},
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyCommands\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setMyName",
    "href": "https://core.telegram.org/bots/api#setmyname",
    "description": "Use this method to change the bot's name. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": false,
        "description": "New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "name": "example",
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMyName\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMyName",
    "href": "https://core.telegram.org/bots/api#getmyname",
    "description": "Use this method to get the current bot name for the given user language. Returns BotName on success.",
    "returns": "BotName",
    "params": [
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code or an empty string"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyName\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setMyDescription",
    "href": "https://core.telegram.org/bots/api#setmydescription",
    "description": "Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "description",
        "typesLabel": "String",
        "required": false,
        "description": "New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "description": "example",
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMyDescription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMyDescription",
    "href": "https://core.telegram.org/bots/api#getmydescription",
    "description": "Use this method to get the current bot description for the given user language. Returns BotDescription on success.",
    "returns": "BotDescription",
    "params": [
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code or an empty string"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyDescription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setMyShortDescription",
    "href": "https://core.telegram.org/bots/api#setmyshortdescription",
    "description": "Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "short_description",
        "typesLabel": "String",
        "required": false,
        "description": "New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language."
      },
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "short_description": "example",
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMyShortDescription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMyShortDescription",
    "href": "https://core.telegram.org/bots/api#getmyshortdescription",
    "description": "Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.",
    "returns": "BotShortDescription",
    "params": [
      {
        "name": "language_code",
        "typesLabel": "String",
        "required": false,
        "description": "A two-letter ISO 639-1 language code or an empty string"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "language_code": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyShortDescription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setChatMenuButton",
    "href": "https://core.telegram.org/bots/api#setchatmenubutton",
    "description": "Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target private chat. If not specified, default bot's menu button will be changed"
      },
      {
        "name": "menu_button",
        "typesLabel": "MenuButton",
        "required": false,
        "description": "A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "chat_id": 123456789,
      "menu_button": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setChatMenuButton\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getChatMenuButton",
    "href": "https://core.telegram.org/bots/api#getchatmenubutton",
    "description": "Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.",
    "returns": "MenuButton",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target private chat. If not specified, default bot's menu button will be returned"
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChatMenuButton\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "setMyDefaultAdministratorRights",
    "href": "https://core.telegram.org/bots/api#setmydefaultadministratorrights",
    "description": "Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "rights",
        "typesLabel": "ChatAdministratorRights",
        "required": false,
        "description": "A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared."
      },
      {
        "name": "for_channels",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "rights": {},
      "for_channels": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setMyDefaultAdministratorRights\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getMyDefaultAdministratorRights",
    "href": "https://core.telegram.org/bots/api#getmydefaultadministratorrights",
    "description": "Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.",
    "returns": "ChatAdministratorRights",
    "params": [
      {
        "name": "for_channels",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "for_channels": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyDefaultAdministratorRights\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getAvailableGifts",
    "href": "https://core.telegram.org/bots/api#getavailablegifts",
    "description": "Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.",
    "returns": "Gifts",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getAvailableGifts\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "sendGift",
    "href": "https://core.telegram.org/bots/api#sendgift",
    "description": "Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if chat_id is not specified. Unique identifier of the target user who will receive the gift."
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift."
      },
      {
        "name": "gift_id",
        "typesLabel": "String",
        "required": true,
        "description": "Identifier of the gift; limited gifts can't be sent to channel chats"
      },
      {
        "name": "pay_for_upgrade",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": false,
        "description": "Text that will be shown along with the gift; 0-128 characters"
      },
      {
        "name": "text_parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the text. See formatting options for more details. Entities other than \"bold\", \"italic\", \"underline\", \"strikethrough\", \"spoiler\", and \"custom_emoji\" are ignored."
      },
      {
        "name": "text_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than \"bold\", \"italic\", \"underline\", \"strikethrough\", \"spoiler\", and \"custom_emoji\" are ignored."
      }
    ],
    "jsonRequired": {
      "gift_id": "example"
    },
    "jsonFull": {
      "user_id": 123456789,
      "chat_id": 123456789,
      "gift_id": "example",
      "pay_for_upgrade": false,
      "text": "example",
      "text_parse_mode": "example",
      "text_entities": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendGift\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"gift_id\": \"example\"\n}'"
  },
  {
    "name": "giftPremiumSubscription",
    "href": "https://core.telegram.org/bots/api#giftpremiumsubscription",
    "description": "Gifts a Telegram Premium subscription to the given user. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user who will receive a Telegram Premium subscription"
      },
      {
        "name": "month_count",
        "typesLabel": "Integer",
        "required": true,
        "description": "Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12"
      },
      {
        "name": "star_count",
        "typesLabel": "Integer",
        "required": true,
        "description": "Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": false,
        "description": "Text that will be shown along with the service message about the subscription; 0-128 characters"
      },
      {
        "name": "text_parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the text. See formatting options for more details. Entities other than \"bold\", \"italic\", \"underline\", \"strikethrough\", \"spoiler\", and \"custom_emoji\" are ignored."
      },
      {
        "name": "text_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than \"bold\", \"italic\", \"underline\", \"strikethrough\", \"spoiler\", and \"custom_emoji\" are ignored."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "month_count": 123456789,
      "star_count": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "month_count": 123456789,
      "star_count": 123456789,
      "text": "example",
      "text_parse_mode": "example",
      "text_entities": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/giftPremiumSubscription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"month_count\": 123456789,\n  \"star_count\": 123456789\n}'"
  },
  {
    "name": "verifyUser",
    "href": "https://core.telegram.org/bots/api#verifyuser",
    "description": "Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      },
      {
        "name": "custom_description",
        "typesLabel": "String",
        "required": false,
        "description": "Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "custom_description": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/verifyUser\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "verifyChat",
    "href": "https://core.telegram.org/bots/api#verifychat",
    "description": "Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername). Channel direct messages chats can't be verified."
      },
      {
        "name": "custom_description",
        "typesLabel": "String",
        "required": false,
        "description": "Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "custom_description": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/verifyChat\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "removeUserVerification",
    "href": "https://core.telegram.org/bots/api#removeuserverification",
    "description": "Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/removeUserVerification\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "removeChatVerification",
    "href": "https://core.telegram.org/bots/api#removechatverification",
    "description": "Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/removeChatVerification\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "readBusinessMessage",
    "href": "https://core.telegram.org/bots/api#readbusinessmessage",
    "description": "Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection on behalf of which to read the message"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours."
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the message to mark as read"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/readBusinessMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "deleteBusinessMessages",
    "href": "https://core.telegram.org/bots/api#deletebusinessmessages",
    "description": "Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection on behalf of which to delete the messages"
      },
      {
        "name": "message_ids",
        "typesLabel": "Array of Integer",
        "required": true,
        "description": "A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "message_ids": []
    },
    "jsonFull": {
      "business_connection_id": "example",
      "message_ids": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteBusinessMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"message_ids\": []\n}'"
  },
  {
    "name": "setBusinessAccountName",
    "href": "https://core.telegram.org/bots/api#setbusinessaccountname",
    "description": "Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "first_name",
        "typesLabel": "String",
        "required": true,
        "description": "The new value of the first name for the business account; 1-64 characters"
      },
      {
        "name": "last_name",
        "typesLabel": "String",
        "required": false,
        "description": "The new value of the last name for the business account; 0-64 characters"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "first_name": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "first_name": "example",
      "last_name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setBusinessAccountName\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"first_name\": \"example\"\n}'"
  },
  {
    "name": "setBusinessAccountUsername",
    "href": "https://core.telegram.org/bots/api#setbusinessaccountusername",
    "description": "Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "username",
        "typesLabel": "String",
        "required": false,
        "description": "The new value of the username for the business account; 0-32 characters"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "username": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setBusinessAccountUsername\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "setBusinessAccountBio",
    "href": "https://core.telegram.org/bots/api#setbusinessaccountbio",
    "description": "Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "bio",
        "typesLabel": "String",
        "required": false,
        "description": "The new value of the bio for the business account; 0-140 characters"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "bio": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setBusinessAccountBio\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "setBusinessAccountProfilePhoto",
    "href": "https://core.telegram.org/bots/api#setbusinessaccountprofilephoto",
    "description": "Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "photo",
        "typesLabel": "InputProfilePhoto",
        "required": true,
        "description": "The new profile photo to set"
      },
      {
        "name": "is_public",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo."
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "photo": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "photo": {},
      "is_public": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setBusinessAccountProfilePhoto\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"photo\": {}\n}'"
  },
  {
    "name": "removeBusinessAccountProfilePhoto",
    "href": "https://core.telegram.org/bots/api#removebusinessaccountprofilephoto",
    "description": "Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "is_public",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo."
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "is_public": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/removeBusinessAccountProfilePhoto\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "setBusinessAccountGiftSettings",
    "href": "https://core.telegram.org/bots/api#setbusinessaccountgiftsettings",
    "description": "Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "show_gift_button",
        "typesLabel": "Boolean",
        "required": true,
        "description": "Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field"
      },
      {
        "name": "accepted_gift_types",
        "typesLabel": "AcceptedGiftTypes",
        "required": true,
        "description": "Types of gifts accepted by the business account"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "show_gift_button": false,
      "accepted_gift_types": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "show_gift_button": false,
      "accepted_gift_types": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setBusinessAccountGiftSettings\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"show_gift_button\": false,\n  \"accepted_gift_types\": {}\n}'"
  },
  {
    "name": "getBusinessAccountStarBalance",
    "href": "https://core.telegram.org/bots/api#getbusinessaccountstarbalance",
    "description": "Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.",
    "returns": "StarAmount",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getBusinessAccountStarBalance\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "transferBusinessAccountStars",
    "href": "https://core.telegram.org/bots/api#transferbusinessaccountstars",
    "description": "Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "star_count",
        "typesLabel": "Integer",
        "required": true,
        "description": "Number of Telegram Stars to transfer; 1-10000"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "star_count": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "star_count": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/transferBusinessAccountStars\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"star_count\": 123456789\n}'"
  },
  {
    "name": "getBusinessAccountGifts",
    "href": "https://core.telegram.org/bots/api#getbusinessaccountgifts",
    "description": "Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns OwnedGifts on success.",
    "returns": "OwnedGifts",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "exclude_unsaved",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that aren't saved to the account's profile page"
      },
      {
        "name": "exclude_saved",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that are saved to the account's profile page"
      },
      {
        "name": "exclude_unlimited",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased an unlimited number of times"
      },
      {
        "name": "exclude_limited_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique"
      },
      {
        "name": "exclude_limited_non_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique"
      },
      {
        "name": "exclude_unique",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude unique gifts"
      },
      {
        "name": "exclude_from_blockchain",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram"
      },
      {
        "name": "sort_by_price",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to sort results by gift price instead of send date. Sorting is applied before pagination."
      },
      {
        "name": "offset",
        "typesLabel": "String",
        "required": false,
        "description": "Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results"
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of gifts to be returned; 1-100. Defaults to 100"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "exclude_unsaved": false,
      "exclude_saved": false,
      "exclude_unlimited": false,
      "exclude_limited_upgradable": false,
      "exclude_limited_non_upgradable": false,
      "exclude_unique": false,
      "exclude_from_blockchain": false,
      "sort_by_price": false,
      "offset": "example",
      "limit": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getBusinessAccountGifts\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\"\n}'"
  },
  {
    "name": "getUserGifts",
    "href": "https://core.telegram.org/bots/api#getusergifts",
    "description": "Returns the gifts owned and hosted by a user. Returns OwnedGifts on success.",
    "returns": "OwnedGifts",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the user"
      },
      {
        "name": "exclude_unlimited",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased an unlimited number of times"
      },
      {
        "name": "exclude_limited_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique"
      },
      {
        "name": "exclude_limited_non_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique"
      },
      {
        "name": "exclude_from_blockchain",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram"
      },
      {
        "name": "exclude_unique",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude unique gifts"
      },
      {
        "name": "sort_by_price",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to sort results by gift price instead of send date. Sorting is applied before pagination."
      },
      {
        "name": "offset",
        "typesLabel": "String",
        "required": false,
        "description": "Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results"
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of gifts to be returned; 1-100. Defaults to 100"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "exclude_unlimited": false,
      "exclude_limited_upgradable": false,
      "exclude_limited_non_upgradable": false,
      "exclude_from_blockchain": false,
      "exclude_unique": false,
      "sort_by_price": false,
      "offset": "example",
      "limit": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getUserGifts\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  },
  {
    "name": "getChatGifts",
    "href": "https://core.telegram.org/bots/api#getchatgifts",
    "description": "Returns the gifts owned by a chat. Returns OwnedGifts on success.",
    "returns": "OwnedGifts",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "exclude_unsaved",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that aren't saved to the chat's profile page. Always True, unless the bot has the can_post_messages administrator right in the channel."
      },
      {
        "name": "exclude_saved",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that are saved to the chat's profile page. Always False, unless the bot has the can_post_messages administrator right in the channel."
      },
      {
        "name": "exclude_unlimited",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased an unlimited number of times"
      },
      {
        "name": "exclude_limited_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can be upgraded to unique"
      },
      {
        "name": "exclude_limited_non_upgradable",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique"
      },
      {
        "name": "exclude_from_blockchain",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram"
      },
      {
        "name": "exclude_unique",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to exclude unique gifts"
      },
      {
        "name": "sort_by_price",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to sort results by gift price instead of send date. Sorting is applied before pagination."
      },
      {
        "name": "offset",
        "typesLabel": "String",
        "required": false,
        "description": "Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results"
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of gifts to be returned; 1-100. Defaults to 100"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "exclude_unsaved": false,
      "exclude_saved": false,
      "exclude_unlimited": false,
      "exclude_limited_upgradable": false,
      "exclude_limited_non_upgradable": false,
      "exclude_from_blockchain": false,
      "exclude_unique": false,
      "sort_by_price": false,
      "offset": "example",
      "limit": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getChatGifts\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789\n}'"
  },
  {
    "name": "convertGiftToStars",
    "href": "https://core.telegram.org/bots/api#convertgifttostars",
    "description": "Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "owned_gift_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the regular gift that should be converted to Telegram Stars"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "owned_gift_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "owned_gift_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/convertGiftToStars\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"owned_gift_id\": \"example\"\n}'"
  },
  {
    "name": "upgradeGift",
    "href": "https://core.telegram.org/bots/api#upgradegift",
    "description": "Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "owned_gift_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the regular gift that should be upgraded to a unique one"
      },
      {
        "name": "keep_original_details",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to keep the original gift text, sender and receiver in the upgraded gift"
      },
      {
        "name": "star_count",
        "typesLabel": "Integer",
        "required": false,
        "description": "The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed."
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "owned_gift_id": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "owned_gift_id": "example",
      "keep_original_details": false,
      "star_count": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/upgradeGift\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"owned_gift_id\": \"example\"\n}'"
  },
  {
    "name": "transferGift",
    "href": "https://core.telegram.org/bots/api#transfergift",
    "description": "Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "owned_gift_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the regular gift that should be transferred"
      },
      {
        "name": "new_owner_chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours."
      },
      {
        "name": "star_count",
        "typesLabel": "Integer",
        "required": false,
        "description": "The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required."
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "owned_gift_id": "example",
      "new_owner_chat_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "owned_gift_id": "example",
      "new_owner_chat_id": 123456789,
      "star_count": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/transferGift\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"owned_gift_id\": \"example\",\n  \"new_owner_chat_id\": 123456789\n}'"
  },
  {
    "name": "postStory",
    "href": "https://core.telegram.org/bots/api#poststory",
    "description": "Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.",
    "returns": "Story",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "content",
        "typesLabel": "InputStoryContent",
        "required": true,
        "description": "Content of the story"
      },
      {
        "name": "active_period",
        "typesLabel": "Integer",
        "required": true,
        "description": "Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Caption of the story, 0-2048 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the story caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "areas",
        "typesLabel": "Array of StoryArea",
        "required": false,
        "description": "A JSON-serialized list of clickable areas to be shown on the story"
      },
      {
        "name": "post_to_chat_page",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to keep the story accessible after it expires"
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the content of the story must be protected from forwarding and screenshotting"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "content": {},
      "active_period": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "content": {},
      "active_period": 123456789,
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "areas": [],
      "post_to_chat_page": false,
      "protect_content": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/postStory\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"content\": {},\n  \"active_period\": 123456789\n}'"
  },
  {
    "name": "repostStory",
    "href": "https://core.telegram.org/bots/api#repoststory",
    "description": "Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted (or reposted) by the bot. Requires the can_manage_stories business bot right for both business accounts. Returns Story on success.",
    "returns": "Story",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "from_chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the chat which posted the story that should be reposted"
      },
      {
        "name": "from_story_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the story that should be reposted"
      },
      {
        "name": "active_period",
        "typesLabel": "Integer",
        "required": true,
        "description": "Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400"
      },
      {
        "name": "post_to_chat_page",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to keep the story accessible after it expires"
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the content of the story must be protected from forwarding and screenshotting"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "from_chat_id": 123456789,
      "from_story_id": 123456789,
      "active_period": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "from_chat_id": 123456789,
      "from_story_id": 123456789,
      "active_period": 123456789,
      "post_to_chat_page": false,
      "protect_content": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/repostStory\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"from_chat_id\": 123456789,\n  \"from_story_id\": 123456789,\n  \"active_period\": 123456789\n}'"
  },
  {
    "name": "editStory",
    "href": "https://core.telegram.org/bots/api#editstory",
    "description": "Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.",
    "returns": "Story",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "story_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the story to edit"
      },
      {
        "name": "content",
        "typesLabel": "InputStoryContent",
        "required": true,
        "description": "Content of the story"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "Caption of the story, 0-2048 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the story caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "areas",
        "typesLabel": "Array of StoryArea",
        "required": false,
        "description": "A JSON-serialized list of clickable areas to be shown on the story"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "story_id": 123456789,
      "content": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "story_id": 123456789,
      "content": {},
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "areas": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editStory\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"story_id\": 123456789,\n  \"content\": {}\n}'"
  },
  {
    "name": "deleteStory",
    "href": "https://core.telegram.org/bots/api#deletestory",
    "description": "Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection"
      },
      {
        "name": "story_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the story to delete"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "story_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "story_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteStory\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"story_id\": 123456789\n}'"
  },
  {
    "name": "editMessageText",
    "href": "https://core.telegram.org/bots/api#editmessagetext",
    "description": "Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "text",
        "typesLabel": "String",
        "required": true,
        "description": "New text of the message, 1-4096 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the message text. See formatting options for more details."
      },
      {
        "name": "entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode"
      },
      {
        "name": "link_preview_options",
        "typesLabel": "LinkPreviewOptions",
        "required": false,
        "description": "Link preview generation options for the message"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard."
      }
    ],
    "jsonRequired": {
      "text": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "text": "example",
      "parse_mode": "example",
      "entities": [],
      "link_preview_options": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageText\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"text\": \"example\"\n}'"
  },
  {
    "name": "editMessageCaption",
    "href": "https://core.telegram.org/bots/api#editmessagecaption",
    "description": "Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "caption",
        "typesLabel": "String",
        "required": false,
        "description": "New caption of the message, 0-1024 characters after entities parsing"
      },
      {
        "name": "parse_mode",
        "typesLabel": "String",
        "required": false,
        "description": "Mode for parsing entities in the message caption. See formatting options for more details."
      },
      {
        "name": "caption_entities",
        "typesLabel": "Array of MessageEntity",
        "required": false,
        "description": "A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode"
      },
      {
        "name": "show_caption_above_media",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages."
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "caption": "example",
      "parse_mode": "example",
      "caption_entities": [],
      "show_caption_above_media": false,
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageCaption\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "editMessageMedia",
    "href": "https://core.telegram.org/bots/api#editmessagemedia",
    "description": "Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "media",
        "typesLabel": "InputMedia",
        "required": true,
        "description": "A JSON-serialized object for a new media content of the message"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for a new inline keyboard."
      }
    ],
    "jsonRequired": {
      "media": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "media": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageMedia\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"media\": {}\n}'"
  },
  {
    "name": "editMessageLiveLocation",
    "href": "https://core.telegram.org/bots/api#editmessagelivelocation",
    "description": "Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "latitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Latitude of new location"
      },
      {
        "name": "longitude",
        "typesLabel": "Float",
        "required": true,
        "description": "Longitude of new location"
      },
      {
        "name": "live_period",
        "typesLabel": "Integer",
        "required": false,
        "description": "New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged"
      },
      {
        "name": "horizontal_accuracy",
        "typesLabel": "Float",
        "required": false,
        "description": "The radius of uncertainty for the location, measured in meters; 0-1500"
      },
      {
        "name": "heading",
        "typesLabel": "Integer",
        "required": false,
        "description": "Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified."
      },
      {
        "name": "proximity_alert_radius",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified."
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for a new inline keyboard."
      }
    ],
    "jsonRequired": {
      "latitude": 0.1,
      "longitude": 0.1
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "latitude": 0.1,
      "longitude": 0.1,
      "live_period": 123456789,
      "horizontal_accuracy": 0.1,
      "heading": 123456789,
      "proximity_alert_radius": 123456789,
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageLiveLocation\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"latitude\": 0.1,\n  \"longitude\": 0.1\n}'"
  },
  {
    "name": "stopMessageLiveLocation",
    "href": "https://core.telegram.org/bots/api#stopmessagelivelocation",
    "description": "Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message with live location to stop"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for a new inline keyboard."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/stopMessageLiveLocation\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "editMessageChecklist",
    "href": "https://core.telegram.org/bots/api#editmessagechecklist",
    "description": "Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target chat"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target message"
      },
      {
        "name": "checklist",
        "typesLabel": "InputChecklist",
        "required": true,
        "description": "A JSON-serialized object for the new checklist"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for the new inline keyboard for the message"
      }
    ],
    "jsonRequired": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "checklist": {}
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "checklist": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageChecklist\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"business_connection_id\": \"example\",\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789,\n  \"checklist\": {}\n}'"
  },
  {
    "name": "editMessageReplyMarkup",
    "href": "https://core.telegram.org/bots/api#editmessagereplymarkup",
    "description": "Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the message to edit"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example",
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editMessageReplyMarkup\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "stopPoll",
    "href": "https://core.telegram.org/bots/api#stoppoll",
    "description": "Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.",
    "returns": "Poll",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message to be edited was sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of the original message with the poll"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for a new message inline keyboard."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_id": 123456789,
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/stopPoll\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "approveSuggestedPost",
    "href": "https://core.telegram.org/bots/api#approvesuggestedpost",
    "description": "Use this method to approve a suggested post in a direct messages chat. The bot must have the 'can_post_messages' administrator right in the corresponding channel chat. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target direct messages chat"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of a suggested post message to approve"
      },
      {
        "name": "send_date",
        "typesLabel": "Integer",
        "required": false,
        "description": "Point in time (Unix timestamp) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds (30 days) in the future"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_id": 123456789,
      "send_date": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/approveSuggestedPost\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "declineSuggestedPost",
    "href": "https://core.telegram.org/bots/api#declinesuggestedpost",
    "description": "Use this method to decline a suggested post in a direct messages chat. The bot must have the 'can_manage_direct_messages' administrator right in the corresponding channel chat. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target direct messages chat"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of a suggested post message to decline"
      },
      {
        "name": "comment",
        "typesLabel": "String",
        "required": false,
        "description": "Comment for the creator of the suggested post; 0-128 characters"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_id": 123456789,
      "comment": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/declineSuggestedPost\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "deleteMessage",
    "href": "https://core.telegram.org/bots/api#deletemessage",
    "description": "Use this method to delete a message, including service messages, with the following limitations:\n- A message can only be deleted if it was sent less than 48 hours ago.\n- Service messages about a supergroup, channel, or forum topic creation can't be deleted.\n- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.\n- Bots can delete outgoing messages in private chats, groups, and supergroups.\n- Bots can delete incoming messages in private chats.\n- Bots granted can_post_messages permissions can delete outgoing messages in channels.\n- If the bot is an administrator of a group, it can delete any message there.\n- If the bot has can_delete_messages administrator right in a supergroup or a channel, it can delete any message there.\n- If the bot has can_manage_direct_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.\nReturns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of the message to delete"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_id": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_id\": 123456789\n}'"
  },
  {
    "name": "deleteMessages",
    "href": "https://core.telegram.org/bots/api#deletemessages",
    "description": "Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_ids",
        "typesLabel": "Array of Integer",
        "required": true,
        "description": "A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "message_ids": []
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_ids": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteMessages\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"message_ids\": []\n}'"
  },
  {
    "name": "sendSticker",
    "href": "https://core.telegram.org/bots/api#sendsticker",
    "description": "Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "sticker",
        "typesLabel": "InputFile | String",
        "required": true,
        "description": "Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Video and animated stickers can't be sent via an HTTP URL."
      },
      {
        "name": "emoji",
        "typesLabel": "String",
        "required": false,
        "description": "Emoji associated with the sticker; only for just uploaded stickers"
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply",
        "required": false,
        "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user"
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "sticker": "https://example.com/file.jpg"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "sticker": "https://example.com/file.jpg",
      "emoji": "example",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendSticker\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"sticker\": \"https://example.com/file.jpg\"\n}'"
  },
  {
    "name": "getStickerSet",
    "href": "https://core.telegram.org/bots/api#getstickerset",
    "description": "Use this method to get a sticker set. On success, a StickerSet object is returned.",
    "returns": "StickerSet",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Name of the sticker set"
      }
    ],
    "jsonRequired": {
      "name": "example"
    },
    "jsonFull": {
      "name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getStickerSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"name\": \"example\"\n}'"
  },
  {
    "name": "getCustomEmojiStickers",
    "href": "https://core.telegram.org/bots/api#getcustomemojistickers",
    "description": "Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.",
    "returns": "Array of Sticker",
    "params": [
      {
        "name": "custom_emoji_ids",
        "typesLabel": "Array of String",
        "required": true,
        "description": "A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified."
      }
    ],
    "jsonRequired": {
      "custom_emoji_ids": []
    },
    "jsonFull": {
      "custom_emoji_ids": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getCustomEmojiStickers\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"custom_emoji_ids\": []\n}'"
  },
  {
    "name": "uploadStickerFile",
    "href": "https://core.telegram.org/bots/api#uploadstickerfile",
    "description": "Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.",
    "returns": "File",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier of sticker file owner"
      },
      {
        "name": "sticker",
        "typesLabel": "InputFile",
        "required": true,
        "description": "A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files"
      },
      {
        "name": "sticker_format",
        "typesLabel": "String",
        "required": true,
        "description": "Format of the sticker, must be one of \"static\", \"animated\", \"video\""
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "sticker": "https://example.com/file.jpg",
      "sticker_format": "example"
    },
    "jsonFull": {
      "user_id": 123456789,
      "sticker": "https://example.com/file.jpg",
      "sticker_format": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/uploadStickerFile\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"sticker\": \"https://example.com/file.jpg\",\n  \"sticker_format\": \"example\"\n}'"
  },
  {
    "name": "createNewStickerSet",
    "href": "https://core.telegram.org/bots/api#createnewstickerset",
    "description": "Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier of created sticker set owner"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in \"_by_<bot_username>\". <bot_username> is case insensitive. 1-64 characters."
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set title, 1-64 characters"
      },
      {
        "name": "stickers",
        "typesLabel": "Array of InputSticker",
        "required": true,
        "description": "A JSON-serialized list of 1-50 initial stickers to be added to the sticker set"
      },
      {
        "name": "sticker_type",
        "typesLabel": "String",
        "required": false,
        "description": "Type of stickers in the set, pass \"regular\", \"mask\", or \"custom_emoji\". By default, a regular sticker set is created."
      },
      {
        "name": "needs_repainting",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "name": "example",
      "title": "example",
      "stickers": []
    },
    "jsonFull": {
      "user_id": 123456789,
      "name": "example",
      "title": "example",
      "stickers": [],
      "sticker_type": "example",
      "needs_repainting": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/createNewStickerSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"name\": \"example\",\n  \"title\": \"example\",\n  \"stickers\": []\n}'"
  },
  {
    "name": "addStickerToSet",
    "href": "https://core.telegram.org/bots/api#addstickertoset",
    "description": "Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier of sticker set owner"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      },
      {
        "name": "sticker",
        "typesLabel": "InputSticker",
        "required": true,
        "description": "A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "name": "example",
      "sticker": {}
    },
    "jsonFull": {
      "user_id": 123456789,
      "name": "example",
      "sticker": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/addStickerToSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"name\": \"example\",\n  \"sticker\": {}\n}'"
  },
  {
    "name": "setStickerPositionInSet",
    "href": "https://core.telegram.org/bots/api#setstickerpositioninset",
    "description": "Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the sticker"
      },
      {
        "name": "position",
        "typesLabel": "Integer",
        "required": true,
        "description": "New sticker position in the set, zero-based"
      }
    ],
    "jsonRequired": {
      "sticker": "example",
      "position": 123456789
    },
    "jsonFull": {
      "sticker": "example",
      "position": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerPositionInSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"sticker\": \"example\",\n  \"position\": 123456789\n}'"
  },
  {
    "name": "deleteStickerFromSet",
    "href": "https://core.telegram.org/bots/api#deletestickerfromset",
    "description": "Use this method to delete a sticker from a set created by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the sticker"
      }
    ],
    "jsonRequired": {
      "sticker": "example"
    },
    "jsonFull": {
      "sticker": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteStickerFromSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"sticker\": \"example\"\n}'"
  },
  {
    "name": "replaceStickerInSet",
    "href": "https://core.telegram.org/bots/api#replacestickerinset",
    "description": "Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier of the sticker set owner"
      },
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      },
      {
        "name": "old_sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the replaced sticker"
      },
      {
        "name": "sticker",
        "typesLabel": "InputSticker",
        "required": true,
        "description": "A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "name": "example",
      "old_sticker": "example",
      "sticker": {}
    },
    "jsonFull": {
      "user_id": 123456789,
      "name": "example",
      "old_sticker": "example",
      "sticker": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/replaceStickerInSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"name\": \"example\",\n  \"old_sticker\": \"example\",\n  \"sticker\": {}\n}'"
  },
  {
    "name": "setStickerEmojiList",
    "href": "https://core.telegram.org/bots/api#setstickeremojilist",
    "description": "Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the sticker"
      },
      {
        "name": "emoji_list",
        "typesLabel": "Array of String",
        "required": true,
        "description": "A JSON-serialized list of 1-20 emoji associated with the sticker"
      }
    ],
    "jsonRequired": {
      "sticker": "example",
      "emoji_list": []
    },
    "jsonFull": {
      "sticker": "example",
      "emoji_list": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerEmojiList\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"sticker\": \"example\",\n  \"emoji_list\": []\n}'"
  },
  {
    "name": "setStickerKeywords",
    "href": "https://core.telegram.org/bots/api#setstickerkeywords",
    "description": "Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the sticker"
      },
      {
        "name": "keywords",
        "typesLabel": "Array of String",
        "required": false,
        "description": "A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters"
      }
    ],
    "jsonRequired": {
      "sticker": "example"
    },
    "jsonFull": {
      "sticker": "example",
      "keywords": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerKeywords\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"sticker\": \"example\"\n}'"
  },
  {
    "name": "setStickerMaskPosition",
    "href": "https://core.telegram.org/bots/api#setstickermaskposition",
    "description": "Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "sticker",
        "typesLabel": "String",
        "required": true,
        "description": "File identifier of the sticker"
      },
      {
        "name": "mask_position",
        "typesLabel": "MaskPosition",
        "required": false,
        "description": "A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position."
      }
    ],
    "jsonRequired": {
      "sticker": "example"
    },
    "jsonFull": {
      "sticker": "example",
      "mask_position": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerMaskPosition\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"sticker\": \"example\"\n}'"
  },
  {
    "name": "setStickerSetTitle",
    "href": "https://core.telegram.org/bots/api#setstickersettitle",
    "description": "Use this method to set the title of a created sticker set. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set title, 1-64 characters"
      }
    ],
    "jsonRequired": {
      "name": "example",
      "title": "example"
    },
    "jsonFull": {
      "name": "example",
      "title": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerSetTitle\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"name\": \"example\",\n  \"title\": \"example\"\n}'"
  },
  {
    "name": "setStickerSetThumbnail",
    "href": "https://core.telegram.org/bots/api#setstickersetthumbnail",
    "description": "Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      },
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier of the sticker set owner"
      },
      {
        "name": "thumbnail",
        "typesLabel": "InputFile | String",
        "required": false,
        "description": "A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail."
      },
      {
        "name": "format",
        "typesLabel": "String",
        "required": true,
        "description": "Format of the thumbnail, must be one of \"static\" for a .WEBP or .PNG image, \"animated\" for a .TGS animation, or \"video\" for a .WEBM video"
      }
    ],
    "jsonRequired": {
      "name": "example",
      "user_id": 123456789,
      "format": "example"
    },
    "jsonFull": {
      "name": "example",
      "user_id": 123456789,
      "thumbnail": "https://example.com/file.jpg",
      "format": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setStickerSetThumbnail\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"name\": \"example\",\n  \"user_id\": 123456789,\n  \"format\": \"example\"\n}'"
  },
  {
    "name": "setCustomEmojiStickerSetThumbnail",
    "href": "https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail",
    "description": "Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      },
      {
        "name": "custom_emoji_id",
        "typesLabel": "String",
        "required": false,
        "description": "Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail."
      }
    ],
    "jsonRequired": {
      "name": "example"
    },
    "jsonFull": {
      "name": "example",
      "custom_emoji_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setCustomEmojiStickerSetThumbnail\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"name\": \"example\"\n}'"
  },
  {
    "name": "deleteStickerSet",
    "href": "https://core.telegram.org/bots/api#deletestickerset",
    "description": "Use this method to delete a sticker set that was created by the bot. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "name",
        "typesLabel": "String",
        "required": true,
        "description": "Sticker set name"
      }
    ],
    "jsonRequired": {
      "name": "example"
    },
    "jsonFull": {
      "name": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/deleteStickerSet\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"name\": \"example\"\n}'"
  },
  {
    "name": "answerInlineQuery",
    "href": "https://core.telegram.org/bots/api#answerinlinequery",
    "description": "Use this method to send answers to an inline query. On success, True is returned.\nNo more than 50 results per query are allowed.",
    "returns": "Boolean",
    "params": [
      {
        "name": "inline_query_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier for the answered query"
      },
      {
        "name": "results",
        "typesLabel": "Array of InlineQueryResult",
        "required": true,
        "description": "A JSON-serialized array of results for the inline query"
      },
      {
        "name": "cache_time",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300."
      },
      {
        "name": "is_personal",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query."
      },
      {
        "name": "next_offset",
        "typesLabel": "String",
        "required": false,
        "description": "Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes."
      },
      {
        "name": "button",
        "typesLabel": "InlineQueryResultsButton",
        "required": false,
        "description": "A JSON-serialized object describing a button to be shown above inline query results"
      }
    ],
    "jsonRequired": {
      "inline_query_id": "example",
      "results": []
    },
    "jsonFull": {
      "inline_query_id": "example",
      "results": [],
      "cache_time": 123456789,
      "is_personal": false,
      "next_offset": "example",
      "button": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/answerInlineQuery\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"inline_query_id\": \"example\",\n  \"results\": []\n}'"
  },
  {
    "name": "answerWebAppQuery",
    "href": "https://core.telegram.org/bots/api#answerwebappquery",
    "description": "Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.",
    "returns": "SentWebAppMessage",
    "params": [
      {
        "name": "web_app_query_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier for the query to be answered"
      },
      {
        "name": "result",
        "typesLabel": "InlineQueryResult",
        "required": true,
        "description": "A JSON-serialized object describing the message to be sent"
      }
    ],
    "jsonRequired": {
      "web_app_query_id": "example",
      "result": {}
    },
    "jsonFull": {
      "web_app_query_id": "example",
      "result": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/answerWebAppQuery\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"web_app_query_id\": \"example\",\n  \"result\": {}\n}'"
  },
  {
    "name": "savePreparedInlineMessage",
    "href": "https://core.telegram.org/bots/api#savepreparedinlinemessage",
    "description": "Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.",
    "returns": "PreparedInlineMessage",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier of the target user that can use the prepared message"
      },
      {
        "name": "result",
        "typesLabel": "InlineQueryResult",
        "required": true,
        "description": "A JSON-serialized object describing the message to be sent"
      },
      {
        "name": "allow_user_chats",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the message can be sent to private chats with users"
      },
      {
        "name": "allow_bot_chats",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the message can be sent to private chats with bots"
      },
      {
        "name": "allow_group_chats",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the message can be sent to group and supergroup chats"
      },
      {
        "name": "allow_channel_chats",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the message can be sent to channel chats"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "result": {}
    },
    "jsonFull": {
      "user_id": 123456789,
      "result": {},
      "allow_user_chats": false,
      "allow_bot_chats": false,
      "allow_group_chats": false,
      "allow_channel_chats": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/savePreparedInlineMessage\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"result\": {}\n}'"
  },
  {
    "name": "sendInvoice",
    "href": "https://core.telegram.org/bots/api#sendinvoice",
    "description": "Use this method to send invoices. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "chat_id",
        "typesLabel": "Integer | String",
        "required": true,
        "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)"
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "direct_messages_topic_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat"
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "Product name, 1-32 characters"
      },
      {
        "name": "description",
        "typesLabel": "String",
        "required": true,
        "description": "Product description, 1-255 characters"
      },
      {
        "name": "payload",
        "typesLabel": "String",
        "required": true,
        "description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes."
      },
      {
        "name": "provider_token",
        "typesLabel": "String",
        "required": false,
        "description": "Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars."
      },
      {
        "name": "currency",
        "typesLabel": "String",
        "required": true,
        "description": "Three-letter ISO 4217 currency code, see more on currencies. Pass \"XTR\" for payments in Telegram Stars."
      },
      {
        "name": "prices",
        "typesLabel": "Array of LabeledPrice",
        "required": true,
        "description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars."
      },
      {
        "name": "max_tip_amount",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars."
      },
      {
        "name": "suggested_tip_amounts",
        "typesLabel": "Array of Integer",
        "required": false,
        "description": "A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount."
      },
      {
        "name": "start_parameter",
        "typesLabel": "String",
        "required": false,
        "description": "Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter"
      },
      {
        "name": "provider_data",
        "typesLabel": "String",
        "required": false,
        "description": "JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider."
      },
      {
        "name": "photo_url",
        "typesLabel": "String",
        "required": false,
        "description": "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for."
      },
      {
        "name": "photo_size",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo size in bytes"
      },
      {
        "name": "photo_width",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo width"
      },
      {
        "name": "photo_height",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo height"
      },
      {
        "name": "need_name",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_phone_number",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_email",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_shipping_address",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "send_phone_number_to_provider",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars."
      },
      {
        "name": "send_email_to_provider",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars."
      },
      {
        "name": "is_flexible",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "suggested_post_parameters",
        "typesLabel": "SuggestedPostParameters",
        "required": false,
        "description": "A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined."
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "title": "example",
      "description": "example",
      "payload": "example",
      "currency": "example",
      "prices": []
    },
    "jsonFull": {
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "direct_messages_topic_id": 123456789,
      "title": "example",
      "description": "example",
      "payload": "example",
      "provider_token": "example",
      "currency": "example",
      "prices": [],
      "max_tip_amount": 123456789,
      "suggested_tip_amounts": [],
      "start_parameter": "example",
      "provider_data": "example",
      "photo_url": "example",
      "photo_size": 123456789,
      "photo_width": 123456789,
      "photo_height": 123456789,
      "need_name": false,
      "need_phone_number": false,
      "need_email": false,
      "need_shipping_address": false,
      "send_phone_number_to_provider": false,
      "send_email_to_provider": false,
      "is_flexible": false,
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "suggested_post_parameters": {},
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendInvoice\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"title\": \"example\",\n  \"description\": \"example\",\n  \"payload\": \"example\",\n  \"currency\": \"example\",\n  \"prices\": []\n}'"
  },
  {
    "name": "createInvoiceLink",
    "href": "https://core.telegram.org/bots/api#createinvoicelink",
    "description": "Use this method to create a link for an invoice. Returns the created invoice link as String on success.",
    "returns": "String",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only."
      },
      {
        "name": "title",
        "typesLabel": "String",
        "required": true,
        "description": "Product name, 1-32 characters"
      },
      {
        "name": "description",
        "typesLabel": "String",
        "required": true,
        "description": "Product description, 1-255 characters"
      },
      {
        "name": "payload",
        "typesLabel": "String",
        "required": true,
        "description": "Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes."
      },
      {
        "name": "provider_token",
        "typesLabel": "String",
        "required": false,
        "description": "Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars."
      },
      {
        "name": "currency",
        "typesLabel": "String",
        "required": true,
        "description": "Three-letter ISO 4217 currency code, see more on currencies. Pass \"XTR\" for payments in Telegram Stars."
      },
      {
        "name": "prices",
        "typesLabel": "Array of LabeledPrice",
        "required": true,
        "description": "Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars."
      },
      {
        "name": "subscription_period",
        "typesLabel": "Integer",
        "required": false,
        "description": "The number of seconds the subscription will be active for before the next payment. The currency must be set to \"XTR\" (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars."
      },
      {
        "name": "max_tip_amount",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars."
      },
      {
        "name": "suggested_tip_amounts",
        "typesLabel": "Array of Integer",
        "required": false,
        "description": "A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount."
      },
      {
        "name": "provider_data",
        "typesLabel": "String",
        "required": false,
        "description": "JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider."
      },
      {
        "name": "photo_url",
        "typesLabel": "String",
        "required": false,
        "description": "URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service."
      },
      {
        "name": "photo_size",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo size in bytes"
      },
      {
        "name": "photo_width",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo width"
      },
      {
        "name": "photo_height",
        "typesLabel": "Integer",
        "required": false,
        "description": "Photo height"
      },
      {
        "name": "need_name",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_phone_number",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_email",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "need_shipping_address",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars."
      },
      {
        "name": "send_phone_number_to_provider",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars."
      },
      {
        "name": "send_email_to_provider",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars."
      },
      {
        "name": "is_flexible",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars."
      }
    ],
    "jsonRequired": {
      "title": "example",
      "description": "example",
      "payload": "example",
      "currency": "example",
      "prices": []
    },
    "jsonFull": {
      "business_connection_id": "example",
      "title": "example",
      "description": "example",
      "payload": "example",
      "provider_token": "example",
      "currency": "example",
      "prices": [],
      "subscription_period": 123456789,
      "max_tip_amount": 123456789,
      "suggested_tip_amounts": [],
      "provider_data": "example",
      "photo_url": "example",
      "photo_size": 123456789,
      "photo_width": 123456789,
      "photo_height": 123456789,
      "need_name": false,
      "need_phone_number": false,
      "need_email": false,
      "need_shipping_address": false,
      "send_phone_number_to_provider": false,
      "send_email_to_provider": false,
      "is_flexible": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/createInvoiceLink\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"title\": \"example\",\n  \"description\": \"example\",\n  \"payload\": \"example\",\n  \"currency\": \"example\",\n  \"prices\": []\n}'"
  },
  {
    "name": "answerShippingQuery",
    "href": "https://core.telegram.org/bots/api#answershippingquery",
    "description": "If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.",
    "returns": "Boolean",
    "params": [
      {
        "name": "shipping_query_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier for the query to be answered"
      },
      {
        "name": "ok",
        "typesLabel": "Boolean",
        "required": true,
        "description": "Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)"
      },
      {
        "name": "shipping_options",
        "typesLabel": "Array of ShippingOption",
        "required": false,
        "description": "Required if ok is True. A JSON-serialized array of available shipping options."
      },
      {
        "name": "error_message",
        "typesLabel": "String",
        "required": false,
        "description": "Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. \"Sorry, delivery to your desired address is unavailable\"). Telegram will display this message to the user."
      }
    ],
    "jsonRequired": {
      "shipping_query_id": "example",
      "ok": false
    },
    "jsonFull": {
      "shipping_query_id": "example",
      "ok": false,
      "shipping_options": [],
      "error_message": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/answerShippingQuery\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"shipping_query_id\": \"example\",\n  \"ok\": false\n}'"
  },
  {
    "name": "answerPreCheckoutQuery",
    "href": "https://core.telegram.org/bots/api#answerprecheckoutquery",
    "description": "Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.",
    "returns": "Boolean",
    "params": [
      {
        "name": "pre_checkout_query_id",
        "typesLabel": "String",
        "required": true,
        "description": "Unique identifier for the query to be answered"
      },
      {
        "name": "ok",
        "typesLabel": "Boolean",
        "required": true,
        "description": "Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems."
      },
      {
        "name": "error_message",
        "typesLabel": "String",
        "required": false,
        "description": "Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. \"Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!\"). Telegram will display this message to the user."
      }
    ],
    "jsonRequired": {
      "pre_checkout_query_id": "example",
      "ok": false
    },
    "jsonFull": {
      "pre_checkout_query_id": "example",
      "ok": false,
      "error_message": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/answerPreCheckoutQuery\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"pre_checkout_query_id\": \"example\",\n  \"ok\": false\n}'"
  },
  {
    "name": "getMyStarBalance",
    "href": "https://core.telegram.org/bots/api#getmystarbalance",
    "description": "A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.",
    "returns": "StarAmount",
    "params": [],
    "jsonRequired": {},
    "jsonFull": {},
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getMyStarBalance\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "getStarTransactions",
    "href": "https://core.telegram.org/bots/api#getstartransactions",
    "description": "Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.",
    "returns": "StarTransactions",
    "params": [
      {
        "name": "offset",
        "typesLabel": "Integer",
        "required": false,
        "description": "Number of transactions to skip in the response"
      },
      {
        "name": "limit",
        "typesLabel": "Integer",
        "required": false,
        "description": "The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100."
      }
    ],
    "jsonRequired": {},
    "jsonFull": {
      "offset": 123456789,
      "limit": 123456789
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getStarTransactions\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{}'"
  },
  {
    "name": "refundStarPayment",
    "href": "https://core.telegram.org/bots/api#refundstarpayment",
    "description": "Refunds a successful payment in Telegram Stars. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of the user whose payment will be refunded"
      },
      {
        "name": "telegram_payment_charge_id",
        "typesLabel": "String",
        "required": true,
        "description": "Telegram payment identifier"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "telegram_payment_charge_id": "example"
    },
    "jsonFull": {
      "user_id": 123456789,
      "telegram_payment_charge_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/refundStarPayment\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"telegram_payment_charge_id\": \"example\"\n}'"
  },
  {
    "name": "editUserStarSubscription",
    "href": "https://core.telegram.org/bots/api#edituserstarsubscription",
    "description": "Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Identifier of the user whose subscription will be edited"
      },
      {
        "name": "telegram_payment_charge_id",
        "typesLabel": "String",
        "required": true,
        "description": "Telegram payment identifier for the subscription"
      },
      {
        "name": "is_canceled",
        "typesLabel": "Boolean",
        "required": true,
        "description": "Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot."
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "telegram_payment_charge_id": "example",
      "is_canceled": false
    },
    "jsonFull": {
      "user_id": 123456789,
      "telegram_payment_charge_id": "example",
      "is_canceled": false
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/editUserStarSubscription\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"telegram_payment_charge_id\": \"example\",\n  \"is_canceled\": false\n}'"
  },
  {
    "name": "setPassportDataErrors",
    "href": "https://core.telegram.org/bots/api#setpassportdataerrors",
    "description": "Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.\nUse this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.",
    "returns": "Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier"
      },
      {
        "name": "errors",
        "typesLabel": "Array of PassportElementError",
        "required": true,
        "description": "A JSON-serialized array describing the errors"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "errors": []
    },
    "jsonFull": {
      "user_id": 123456789,
      "errors": []
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setPassportDataErrors\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"errors\": []\n}'"
  },
  {
    "name": "sendGame",
    "href": "https://core.telegram.org/bots/api#sendgame",
    "description": "Use this method to send a game. On success, the sent Message is returned.",
    "returns": "Message",
    "params": [
      {
        "name": "business_connection_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the business connection on behalf of which the message will be sent"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats."
      },
      {
        "name": "message_thread_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only"
      },
      {
        "name": "game_short_name",
        "typesLabel": "String",
        "required": true,
        "description": "Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather."
      },
      {
        "name": "disable_notification",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Sends the message silently. Users will receive a notification with no sound."
      },
      {
        "name": "protect_content",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Protects the contents of the sent message from forwarding and saving"
      },
      {
        "name": "allow_paid_broadcast",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance"
      },
      {
        "name": "message_effect_id",
        "typesLabel": "String",
        "required": false,
        "description": "Unique identifier of the message effect to be added to the message; for private chats only"
      },
      {
        "name": "reply_parameters",
        "typesLabel": "ReplyParameters",
        "required": false,
        "description": "Description of the message to reply to"
      },
      {
        "name": "reply_markup",
        "typesLabel": "InlineKeyboardMarkup",
        "required": false,
        "description": "A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game."
      }
    ],
    "jsonRequired": {
      "chat_id": 123456789,
      "game_short_name": "example"
    },
    "jsonFull": {
      "business_connection_id": "example",
      "chat_id": 123456789,
      "message_thread_id": 123456789,
      "game_short_name": "example",
      "disable_notification": false,
      "protect_content": false,
      "allow_paid_broadcast": false,
      "message_effect_id": "example",
      "reply_parameters": {},
      "reply_markup": {}
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/sendGame\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"chat_id\": 123456789,\n  \"game_short_name\": \"example\"\n}'"
  },
  {
    "name": "setGameScore",
    "href": "https://core.telegram.org/bots/api#setgamescore",
    "description": "Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.",
    "returns": "Message, Boolean",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "User identifier"
      },
      {
        "name": "score",
        "typesLabel": "Integer",
        "required": true,
        "description": "New score, must be non-negative"
      },
      {
        "name": "force",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters"
      },
      {
        "name": "disable_edit_message",
        "typesLabel": "Boolean",
        "required": false,
        "description": "Pass True if the game message should not be automatically edited to include the current scoreboard"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the sent message"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789,
      "score": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "score": 123456789,
      "force": false,
      "disable_edit_message": false,
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/setGameScore\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789,\n  \"score\": 123456789\n}'"
  },
  {
    "name": "getGameHighScores",
    "href": "https://core.telegram.org/bots/api#getgamehighscores",
    "description": "Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.",
    "returns": "Array of GameHighScore",
    "params": [
      {
        "name": "user_id",
        "typesLabel": "Integer",
        "required": true,
        "description": "Target user id"
      },
      {
        "name": "chat_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Unique identifier for the target chat"
      },
      {
        "name": "message_id",
        "typesLabel": "Integer",
        "required": false,
        "description": "Required if inline_message_id is not specified. Identifier of the sent message"
      },
      {
        "name": "inline_message_id",
        "typesLabel": "String",
        "required": false,
        "description": "Required if chat_id and message_id are not specified. Identifier of the inline message"
      }
    ],
    "jsonRequired": {
      "user_id": 123456789
    },
    "jsonFull": {
      "user_id": 123456789,
      "chat_id": 123456789,
      "message_id": 123456789,
      "inline_message_id": "example"
    },
    "curl": "curl -X POST \"https://api.telegram.org/bot<BOT_TOKEN>/getGameHighScores\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n  \"user_id\": 123456789\n}'"
  }
];
