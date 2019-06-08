// name of dress
const names = [
  "Cap Sleeve Lace Sheath Dress",
  "Chelsea Tiered Ruffle Maxi Dress",
  "Chiffon A-Line Dress",
  "Easy Flirty Minidress",
  "Lace Sheath Dress",
  "Print Linen Blend Minidress",
  "Lace Halter Neck Sheath Dress",
  "Lace Sheath Dress",
  "Mixed Eyelet A-Line Dress",
  "Piped Cami Jumpsuit",
  "Print Handkerchief Hem Midi Dress",
  "Puff Sleeve Off the Shoulder Jumpsuit",
  "Romantic Button Front Dress",
  "Ruffle Sleeve Jumpsuit",
  "Ruffle Wrap Dress",
  "Sleeveless Crepe Jumpsuit",
  "Sunrise Wanderer Minidress",
  "The Motherchic Avalon Faux Wrap Jersey Dress",
  "The Motherchic Summer Nights Maxi Dress",
  "Tiered Ruffle Sleeve Dress"
];

// size of dress
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large'];

// description of dress
const descriptions = [
  "A spectacular fit framed by scalloped eyelash trim defines a stretch-lace dress that keeps you stunning yet comfortable through any event of any duration.",
  "Made for dancing, a multi-tiered dress flounces with endless soft, semi-sheer ruffles accenting its twirly bell-cut shape.",
  "Puff sleeves and a rouleau-button placket amplify the vintage-chic aesthetic of a light and lovely, fil coupé chiffon dress with a full, swishy skirt.",
  "Flirting just comes naturally wearing this simple and sweet frock available in solids or prints and especially available for moonlight walks.",
  "Contrast coloring highlights the intricate floral lace and adds another level of patterning on an elegant sheath with a scalloped hem and three-quarter sleeves.",
  "A square neckline bring throwback '90s style to this flirty floral minidress.",
  "Whether you're seated on the bride's side or the groom's, you'll make an elegant impression wearing an all-lace dress edged in eyelash detail and open in back.",
  "Ladder stitching draws the eye to the high neck and tailored bodice of an elegant lace sheath dress with delicate eyelash edges.",
  "Airy cotton eyelet enhances the vintage romance of an A-line dress with flutter sleeves and a twirly tiered skirt.",
  "Blanketed in lively dots, this sleeveless jumpsuit is styled with flattering wide legs and contrasting, piped trim.",
  "Voluminous ruffles detail the neck and hem of a scene-stealing chiffon midi dress in a vibrant, allover floral print.",
  "A belted waist balances out the puffy sleeves and wide crop legs of this stretch-crepe jumpsuit that beautifully reveals sun-kissed shoulders.",
  "Puff sleeves and a rouleau-button placket amplify the unabashedly romantic appeal of a light and lovely dress fashioned with a full, twirl-worthy skirt.",
  "Lavish ruffled sleeves bring dimensional counterpoint to the streamlined silhouette of a faux-wrap jumpsuit in a footwear-flaunting ankle length.",
  "A dramatic tie cinches the waist of this light and lovely wrap dress, styled with frill-trimmed sleeves and a ruffled high/low skirt.",
  "An elasticized waist adds flattering shape to a breezy, sleeveless jumpsuit in a wide-leg silhouette.",
  "Beautifully detailed embroidery in rich colors stands out at the yoke and hem of a breezy boho-chic minidress designed with a slim keyhole at the back.",
  "From a collaboration with fashion/lifestyle blogger Lindsey Schuster, cute pieces like this one prove that looking good can be a breeze—even on crazy-busy days.",
  "A lovely and feminine piece that looks good even on your craziest of days.",
  "Fluttery short sleeves and a flowy tiered skirt bring soft dimension to a faux-wrap dress cut from whisper-light georgette."
];

// colors with respective images
const colorsWithImages = [
  {
    "colors": 
      [
        "Burgundy", 
        "Cobalt Nude"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/806743af-123f-4413-a895-37a32b30d8ab.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/5cd02fc2-3f72-4404-9844-0cdfd326502d.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/7f284bae-9ab0-4748-a3a6-ce0b487db15a.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Cobalt+Nude/ca9b6eca-899a-4f1a-a6c2-aab611952afa.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Cobalt+Nude/1de8e33a-ff5c-4390-9546-a4857689ddb4.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Cobalt+Nude/2b5dc76b-282c-4e65-8173-868a58b2514d.jpeg"
      ]
  },
  {
    "colors": 
      [
        "Black Pink Roses Print"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/c94c39fc-16d5-48b7-abaa-52a1b117e642.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/11bae32f-dc44-48da-a062-d0dd08e8dd2f.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/13be9db8-8d5f-4902-815e-34e20fa51d5e.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Red Chinoise Dot"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/2afefa7c-2937-48ae-a838-48a034b37438.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/33579255-948d-43a0-bfbf-e89d1a7099e1.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/3b68cb67-2a4d-4458-a58a-d5584c84db18.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Red Poppy",
        "Teal Chalk Etch Flowers"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/c872b7ad-0470-4d58-a292-2f5936435dc2.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/54a1df94-363a-4402-8ade-824f5f8e9a3c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/61178330-d602-400f-8376-ccb32db2c6d3.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Teal+Chalk+Etch+Flowers/1ba2ad51-cd56-4d67-8101-e5d671d5aeaf.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Teal+Chalk+Etch+Flowers/48267888-b98f-4dc6-a874-551228a316d3.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Teal+Chalk+Etch+Flowers/53632591-a80c-45de-9a42-54cd337ad550.jpeg"
      ]
  },
  {
    "colors": 
      [
        "Grey/Ivory"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/6c1254b3-a78d-43e5-977f-f19dd2228a86.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/0fc7a54c-e3a3-4782-aedd-48c4a1017130.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/54b55f39-ad0a-444e-831c-6aa754dc6678.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Red Fiery",
        "White Black Polka Dot"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/81550d72-25ad-48d7-a21d-e72bfebbfbb7.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/5e6ed652-70f6-48f6-b58c-1059a426333b.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/16033106-3b37-45ed-b8ff-34641381a8dd.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/734e30bd-2a47-49c4-adcc-d4bc48a10a79.jpeg"
      ]
  }, 
  {
    "colors":
    [
      "Lavender"
    ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/8919c898-78f0-47dc-a1d2-20d8fe1f6abc.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/07abd02d-0676-4a8e-a913-98b4a5e1f8bc.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/4daae6ba-a950-4280-bf61-c911faa6eead.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Ash Blue"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/b496e79c-c287-47c6-8807-957314b2a575.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Pearl White"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/3d8fa920-7ae3-4977-9f1e-2759579b56af.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/0b4799ff-3b53-4741-a949-f93b25dbfcc7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/12c5cf43-1525-4712-a6cc-0bc09a4808ec.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  }, 
  {
    "colors": 
      [
        "Grey Kelsi Floral",
        "Navy Peacoat Kaley Floral"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/ba6c41be-a54a-4db8-bdf1-5b316f2ebf5e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/2066b854-c3ac-4516-b33d-d4f2980fbf0d.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/79307d27-cf9c-4dd3-9369-a44f67c0cb9c.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Navy+Peacoat+Kaley+Floral/23773d4d-b584-4027-a9d5-4a083d348dcf.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Navy+Peacoat+Kaley+Floral/50917827-4d8a-4b1f-a74a-e62909a3f795.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Navy+Peacoat+Kaley+Floral/868f0767-b38f-45e8-87a0-0fd12d38c5f7.jpeg"
      ]
  },
  {
    "colors": 
      [
        "Poppy"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/5f2c6083-f90e-46d0-84f8-cf7f94239ddb.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/7f404808-6d49-460e-b83c-f2c3d11fec52.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/80666030-398a-49b3-aed3-d7d0058143cd.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Navy"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/99f6e979-c068-43cb-9e81-409533cf19a0.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/5a97f923-8d78-4607-8bec-822ef0730d67.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/926ec632-a09b-47fa-ac84-984752ba601c.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Pink Delicacy Painted Floral"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/c1e369f9-61f5-48f9-82e8-f1db2407683c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/0ba982fa-5866-4293-97d3-a69d0c2d6308.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/0d5da42c-626d-4b4e-9125-203076fb0c08.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Pink Tan"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/426fd5ff-704a-4440-82ce-38f686776493.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/aca215ba-9fa7-4b7f-b380-acbe0a15e989.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/b2035d4a-89ec-49dc-bc89-14b553dd3c13.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Ivory Dove Sketch Floral",
        "Pink Tan Stripe"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Ivory+Dove+Sketch+Floral/6c8abd0a-f5f9-47ea-b17b-d4bb96d2541c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Ivory+Dove+Sketch+Floral/23d7c5ec-bb8c-4b9c-801e-b14b89cfe245.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Ivory+Dove+Sketch+Floral/8e2f31d6-5fb2-414f-868c-d87a979ee8a9.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Pink+Tan+Stripe/38024718-1b17-44c3-9231-e255ac55950b.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Pink+Tan+Stripe/4e3fa1f5-6988-497e-941f-0e88dd849d9c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Pink+Tan+Stripe/5595a7db-91f0-458c-8b44-9f6f350b87c7.jpeg"
      ]
  },
  {
    "colors": 
      [
        "Navy"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/66d3de16-8b08-48f9-b011-7ebf86bda2d0.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/0eab3894-f4e1-4e08-a8ad-b87f592afa72.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/3b4104f0-90b8-4b40-92dc-e26fd2b08fbf.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Plum"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/2c5fefdc-12a4-4e08-a728-113cbfd7f58e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/6d72d12d-7382-4183-ad9b-c19fd5d2b2d0.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/a6ae3b2c-8624-4501-8d8a-2a5f254251f9.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Heather Grey"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/a9021845-7305-4def-ac44-8e99195ad1b7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/5bc0c97e-d9f7-4bdb-8455-5840ccada351.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/5cfa76ac-de30-475f-b3f2-5deb955a6208.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  },
  {
    "colors": 
      [
        "Gold Floral",
        "Stripe"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/50769a06-a323-4381-af26-a4716d1fb1bb.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/598a629c-6546-4908-ab2a-c9a91320e4c3.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/87d8ad4e-1715-4ffd-8dc6-e8fd9f626b7f.jpeg"
      ],
    "imageUrlsColor2": 
      [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Stripe/3706c3bf-206a-428d-b49e-e61ecaa192b9.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Stripe/12acd5bf-bb80-4b90-a356-ff5bf7b9e4de.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Stripe/16d4f306-4250-42cb-9083-9eba2b1ad2b1.jpeg"
      ]
  },
  {
    "colors": 
      [
        "Blue Illusion"
      ],
    "imageUrlsColor1": 
      [ 
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/7e5e6f14-ab65-4dcd-9b23-4307bbb57f1d.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/1a0e1300-3c45-4fd2-b1c0-c0bf5a26cb30.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/1b700172-10d0-4c78-b775-39745894f9ea.jpeg"
      ],
    "imageUrlsColor2": 
      [

      ]
  }
];

// designers
const designers = ['Something Navy', 'Eliza J', 'Leith', 'Free People', 'BP.', 'Chelsea28', 
'Harper Rose', 'Charles Henry', 'Rachel Parcell', 'Gibson', 'WAYF'];

// fits
const fits = [
  "Runs large; order one size down.", 
  "True to size.", 
  "Runs small; order one size up."
];

// get random element
const getRandomElement = array => {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
};

// create one dress record for Mongo
const generateMongo = () => {
  let dress = {};
  dress.name = getRandomElement(names);
  dress.sizes = sizes;
  dress.description = getRandomElement(descriptions);
  let colorWithImages = getRandomElement(colorsWithImages);
  dress.color1 = colorWithImages.colors[0];
  if (colorWithImages.colors[1]) {
    dress.color2 = colorWithImages.colors[1];
  }
  dress.imageUrlsColor1 = colorWithImages.imageUrlsColor1;
  if (colorWithImages.imageUrlsColor2) {
    dress.imageUrlsColor2 = colorWithImages.imageUrlsColor2;
  }
  dress.designer = getRandomElement(designers);
  dress.fit = getRandomElement(fits);

  // get random numbers for non-string properties
  dress.price = Math.floor(Math.random() * (300 - 100)) + 100;
  dress.stars = Math.floor(Math.random() * (5 - 1)) + 1;
  dress.reviews = Math.floor(Math.random() * (20 - 10)) + 10;    
  
  return dress;
}

// create one dress record for Postgres
const generatePostgres = () => {
  let dress = '';
  dress += getRandomElement(names) + ' | ';
  dress += '"{' + sizes + '}"' + ' | ';
  dress += getRandomElement(descriptions) + ' | ';
  let colorWithImages = getRandomElement(colorsWithImages);
  dress += colorWithImages.colors[0] + ' | ';
  if (colorWithImages.colors[1]) {
    dress += colorWithImages.colors[1] + ' | ';
  } else {
    dress += ' | ';
  }
  dress += '"{' + colorWithImages.imageUrlsColor1 + '}"' + ' | ';
  if (colorWithImages.imageUrlsColor2) {
    dress += '"{' + colorWithImages.imageUrlsColor2 + '}"' + ' | ';
  }
  dress += getRandomElement(designers) + ' | ';
  dress += getRandomElement(fits) + ' | ';

  // get random numbers for non-string properties
    // price 
  dress += Math.floor(Math.random() * (300 - 100)) + 100 + ' | ';
    // stars
  dress += Math.floor(Math.random() * (5 - 1)) + 1 + ' | ';
    // reviews
  dress += Math.floor(Math.random() * (20 - 10)) + 10;    
  
  return dress;
}

module.exports.generateMongo = generateMongo;
module.exports.generatePostgres = generatePostgres;