{
    "manifest_version": 3,
    "name": "AI Content Detector",
    "version": "1.0",
    "description": "Flags potential AI-generated tweets as you scroll.",
    "permissions": ["scripting", "activeTab"],
    "content_scripts": [
      {
        "matches": ["https://twitter.com/*"],
        "js": ["content.js"]
      }
    ]
  }
  