{
  "name": "your Botname",
  "description": "ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ your name ",
  "logo": "your image url",
  "keywords": ["bot"],
  "success_url": "/",

    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true,
      "value": ""
    },  
    
    "ALIVE_IMG": {
      "description": "paste your image url if you don't have you can use this public url.",
      "required": true,
      "value": "your image url"
    }, 
    
    "ALIVE_MSG": {
      "description": "paste your alive message hear.",
      "required": true,
      "value": "HI DEAR IM ONLINE.!!♻️"
    },
    
    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": true,
      "value": "."
    },
    
    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": true,
      "value": "public"
    }, 

    "AUTO_VOICE": {
      "description": "Make it true if you want bot auto voice.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_REPLY": {
      "description": "Make it true if you want bot auto reply.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_STICKER": {
      "description": "Make it true if you want bot auto sticker.",
      "required": true,
      "value": "false"
    }, 

    "AUTO_READ_STATUS": {
      "description": "Make it true if you want bot auto auto_read_status.",
      "required": true,
      "value": "true"
    }, 

    "ANTI_LINK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": true,
      "value": "true"
    },

    "ANTI_BAD": {
      "description": "Make it true if you want bot auto delete bad words from group example xxx porn etc.",
      "required": true,
      "value": "false"
    }, 

    "FAKE_RECORDING": {
      "description": "Make it true if you want bot fake record.",
      "required": true,
      "value": "true"
    },

    "AUTO_REACT": {
      "description": "Make it true if you want bot AutoReact.",
      "required": false,
      "value": "false"
    },

    "OWNER_REACT": {
      "description": "Make it true if you want bot OwnerReact.",
      "required": false,
      "value": "false"
    
    }, 

    "BOT_NAME": {
      "description": "write hear your name.",
      "required": true,
      "value": "✦『Botname-MD』✦"
    }, 

    "HEART_REACT": {
      "description": "Make it true if you want bot only heart ♥️ emjois reaction .",
      "required": true,
      "value": "false"
    }

},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
