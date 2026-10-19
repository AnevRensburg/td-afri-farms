// Generated from sites/td-afri-farms/site.json by make-site.mjs.
import { SiteConfig } from './site.model';

export const SITE: SiteConfig = {
  "name": "TD Afri Farms",
  "tagline": "Farm fresh chicken, Pretoria North",
  "logo": "logo",
  "meta": {
    "title": "TD Afri Farms | Farm fresh chicken and eggs, Pretoria North",
    "description": "Farm fresh broilers, indigenous Boschvelder chickens and table eggs from Pretoria North, with free delivery to your door."
  },
  "hero": {
    "eyebrow": "Pretoria North farm · Free delivery",
    "title": "Farm fresh chicken, delivered free to your door.",
    "lead": "Natural raised chickens, juicy broilers and fresh table eggs, straight from our farm in Grootvlei, Pretoria North.",
    "image": "hero",
    "imageAlt": "A flock of indigenous chickens on the farm",
    "cta": "See what we sell"
  },
  "highlights": [
    {
      "icon": "truck",
      "title": "Free delivery",
      "text": "We deliver to your doorstep at no charge."
    },
    {
      "icon": "award",
      "title": "Bulk discount",
      "text": "Order 20 or more birds and get a discount."
    },
    {
      "icon": "leaf",
      "title": "No antibiotics",
      "text": "Locally sourced, ethically raised birds."
    },
    {
      "icon": "heart",
      "title": "Natural raised",
      "text": "Indigenous chickens that love their vegetables."
    }
  ],
  "products": {
    "eyebrow": "From our farm",
    "title": "Chicken & eggs",
    "lead": "Add what you need to your order. We’ll confirm availability and arrange delivery.",
    "items": [
      {
        "id": "boschvelder",
        "name": "Boschvelder chickens",
        "description": "Indigenous Boschvelder birds, raised naturally on the farm. The cocks yield tasty meat.",
        "image": "boschvelder",
        "imageAlt": "Indigenous Boschvelder chickens on the farm",
        "options": [
          {
            "label": "",
            "price": null
          }
        ],
        "badge": "Indigenous"
      },
      {
        "id": "whole",
        "name": "Whole broilers (slaughtered)",
        "description": "Juicy, tender broilers, slaughtered and ready for the pot. Priced per kg.",
        "image": "broiler",
        "imageAlt": "Broiler chickens in the grow-out house",
        "options": [
          {
            "label": "Whole bird, per kg",
            "price": 35
          }
        ],
        "badge": "R35/kg"
      },
      {
        "id": "portions",
        "name": "Mixed portions, necks, gizzards & feet",
        "description": "Mixed portions priced per kg. Necks, gizzards and feet are also available: ask when you order.",
        "image": "portions",
        "imageAlt": "Close-up of a white broiler chicken",
        "options": [
          {
            "label": "Mixed portions, per kg",
            "price": 35
          },
          {
            "label": "Necks, gizzards & feet",
            "price": null
          }
        ]
      },
      {
        "id": "live",
        "name": "Live broilers",
        "description": "Live birds for your own flock or your own slaughter. Stock price from a minimum of 10 birds.",
        "image": "live",
        "imageAlt": "Young broiler chicks under feeders",
        "options": [
          {
            "label": "Live bird",
            "price": 50
          },
          {
            "label": "Stock price, each (minimum 10)",
            "price": 45
          }
        ]
      },
      {
        "id": "eggs",
        "name": "Table eggs",
        "description": "Fresh table eggs from our layers, sold by the crate.",
        "image": "eggs",
        "imageAlt": "Crates of fresh table eggs",
        "options": [
          {
            "label": "Per crate",
            "price": null
          }
        ]
      }
    ]
  },
  "story": {
    "eyebrow": "About the farm",
    "title": "Raised on our farm in Grootvlei",
    "paragraphs": [
      "TD Afri Farms is a poultry farm at Plot 100, Station Road, Grootvlei, in Pretoria North. We supply natural raised chickens, farm fresh table eggs, fresh vegetable and maize produce and goat meat.",
      "Our indigenous layers and Boschvelder cocks are fed vegetables, and our broilers are locally sourced and raised without antibiotics. We hatch our own chicks too.",
      "We deliver to your doorstep free of charge, and there is a discount when you order 20 or more birds."
    ],
    "image": "story",
    "imageAlt": "Free-range chickens in a covered run"
  },
  "gallery": [
    {
      "image": "incubator",
      "alt": "Eggs in the incubator"
    },
    {
      "image": "flock",
      "alt": "Chickens scratching in the yard"
    },
    {
      "image": "chicks",
      "alt": "Day-old chicks at the feeders"
    },
    {
      "image": "pens",
      "alt": "A pen full of broilers"
    }
  ],
  "order": {
    "title": "Place your order",
    "lead": "Add your products above, fill in your details and the order opens in your email app, ready to send.",
    "steps": [
      "Choose your products above.",
      "Fill in your details and press Send.",
      "We reply to confirm, with payment details.",
      "Collect, or we arrange delivery."
    ],
    "deliveryOptions": [
      {
        "id": "deliver",
        "label": "Deliver to me",
        "note": "Free delivery to your door",
        "needsAddress": true
      },
      {
        "id": "collect",
        "label": "I’ll collect",
        "note": "We’ll send you the farm details",
        "needsAddress": false
      }
    ],
    "notes": [
      "Ordering 20 or more birds? Mention it for the bulk discount.",
      "Prices for whole birds and portions are per kg."
    ]
  },
  "faq": [
    {
      "q": "Do you deliver?",
      "a": "Yes. We deliver to your doorstep free of charge. Add your address to your order and we’ll confirm the day."
    },
    {
      "q": "Is there a discount for bigger orders?",
      "a": "Yes, there is a discount when you order 20 or more birds."
    },
    {
      "q": "What else do you supply?",
      "a": "Besides chicken and eggs we supply fresh vegetable and maize produce and goat meat. Ask what is available."
    }
  ],
  "contact": {
    "email": "tdafrifarms@gmail.com",
    "phoneDisplay": "081 725 2865",
    "whatsapp": null,
    "address": [
      "R101, Plot 100 Station Road",
      "Grootvlei, Pretoria North, 0182"
    ],
    "hours": [],
    "socials": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/TDAfriFarms/"
      }
    ]
  },
  "slug": "td-afri-farms"
};
