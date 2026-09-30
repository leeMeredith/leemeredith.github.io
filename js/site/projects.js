// One entry per project. See docs/site-plan.md for the fields.
// Listings, section pages, and related links are all built from this list.

var PROJECTS = [
{
	id: "ceramics",
	title: "Ceramics",
	summary: "Clear glaze vessels.",
	category: "ceramics",
	thumb: "thumbs/ceramics.jpg",
	banner: "myIcons/navRelated/CeramicsRelated_0.jpg",
	images: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(function (n) {
		return { src: "Ceramics/the_ceramics_still_have_" + n + ".jpg", alt: "Clear glaze vessel, photo " + (n + 1) };
	}).concat([{ src: "Ceramics/pots.jpg", alt: "A group of pots" }]),
	links: [{ label: "More ceramics on Flickr", url: "https://www.flickr.com/photos/antisuji/albums/72157647565271623" }],
	tags: ["clay", "ceramics"]
},
{
	id: "talking-art",
	title: "Talking Art",
	summary: "Face-tracking mouths that give museum portraits a voice.",
	category: "projects",
	thumb: "thumbs/talking-art.jpg",
	banner: "myIcons/navRelated/TalkingArtRelated_0.jpg",
	year: 2014,
	video: "vimeo:83160270",
	text: [
		"Augmented mouth to mouth: Gilbert Stuart's portrait of George Washington at the Metropolitan Museum of Art speaks his orders to General John Sullivan, at Head-Quarters, May 31, 1779.",
		"“The Expedition you are appointed to command is to be directed against the hostile tribes of the Six Nations of Indians, with their associates and adherents. The immediate objects are the total destruction and devastation of their settlements, and the capture of as many prisoners of every age and sex as possible. It will be essential to ruin their crops now in the ground and prevent their planting more. I would recommend, that some post in the center of the Indian Country, should be occupied with all expedition, with a sufficient quantity of provisions whence parties should be detached to lay waste all the settlements around, with instructions to do it in the most effectual manner, that the country may not be merely overrun, but destroyed.”",
		"“But you will not by any means listen to any overture of peace before the total ruinment of their settlements is effected. Our future security will be in their inability to injure us and in the terror with which the severity of the chastisement they receive will inspire them.”",
		"Made with face tracking on iPad for The Metropolitan Museum of Art MediaLab."
	],
	links: [
		{ label: "The portrait at the MET", url: "http://www.metmuseum.org/toah/works-of-art/07.160/" },
		{ label: "The orders (PDF)", url: "http://jb-hdnp.org/Sarver/Primary_Documents/1770_Sullivan_Campaign_Indian_massacre_seneca.pdf" },
		{ label: "Washington's teeth", url: "http://www.dental.umaryland.edu/museum/index.html/" },
		{ label: "dialogger on GitHub", url: "https://github.com/leeMeredith/dialogger" },
		{ label: "More on Flickr", url: "https://www.flickr.com/photos/antisuji/sets/72157636631363716" }
	],
	tags: ["face tracking", "museum", "animation", "openframeworks"]
},
{
	id: "ortho",
	title: "Ortho",
	summary: "An invented-language generator: same seed, same language.",
	category: "experiments",
	year: 2026,
	links: [{ label: "Ortho on GitHub", url: "https://github.com/leeMeredith/ortho" }],
	script: "js/experiments/ortho.js",
	tags: ["language", "generative", "javascript", "poetry"]
},
{
	id: "weekly-campaign",
	title: "Weekly Campaign",
	summary: "Generative advertising: museum art and invented brands, recast as a new campaign every week, for a product that never appears.",
	category: "experiments",
	year: 2026,
	script: "js/vendor/offbrand/offbrand.js",
	tags: ["generative", "advertising", "language", "javascript"]
},

{
	id: "ofxmanifold",
	title: "ofxManifold",
	summary: "Continuous preset morphing for openFrameworks: place presets as nodes, drag a point between them, get a weighted blend.",
	category: "projects",
	thumb: "thumbs/ofxmanifold.jpg",
	year: 2026,
	text: [
		"ofxManifold lets one continuous gesture drive several independent things at once (synthesis parameters, rhythmic density, colour, lighting, speaker gains, OSC output) without any of them being hardcoded into the thing producing the gesture. Presets sit as nodes on a triangulated surface; a point moving across it resolves to a weighted blend of the nodes around it.",
		"Spatial audio panning is the historically important use and the narrowest one: with four presets you like, moving smoothly between them is the same problem. Silent nodes bound to nothing let the blend fade as well as morph.",
		"It is an independent implementation of an idea with a long lineage: Steve Ellison's barycentric amplitude panning (1986), which became SpaceMap, and Zachary Seldess's MIAP for Max/MSP and Pure Data, which generalized it beyond panning."
	],
	images: [
		{ src: "ofxmanifold/screenshot.jpg", alt: "ofxManifold example: a point among preset nodes on a triangulated surface, with the resulting weights" }
	],
	links: [{ label: "ofxManifold on GitHub", url: "https://github.com/leeMeredith/ofxManifold" }],
	tags: ["openframeworks", "c++", "interpolation", "presets", "spatial audio", "addon"]
},

// Moved from the old js/myWorkMedia/myWorkData.js (step 8). Entries without a summary
// show Ortho placeholder text until one is written.
{
	id: "tabletops-game-design",
	title: "Tabletops Game Design",
	summary: "This book is for the rapid prototyping of tabletop games.",
	category: "projects",
	thumb: "myIcons/navTopic/TGDTopic_0.png",
	banner: "myIcons/navRelated/TGDRelated_0.png",
	year: 2024,
	text: [
		"This book is for the rapid prototyping of tabletop games. It travels easily enabling you to be able to have fun and play test anywhere without taking an intimidating amount of supplies. This book is not only about saving that one game you have spent hours on but will help you create a process of making several games. Just get going with this book of open ended boards, dungeons, character sheets, and game assets, so you can get started immediately. This manual is not full of pontification but instead it is the demystification of the process of tabletop game design. Which is possible by assisting you with repeating the process of prototyping, play testing and iterating. If this is not the first game design book you buy, it will make a perfect companion to any other book you would purchase on the subject. Let this book help you understand that it is game design, not pain design, and to always remember to bring in an eraser. Buy On Amazon!"
	],
	images: [
		{
			src: "tabletopgamedesign/Cover_F.png",
			alt: "Tabletops Game Design, image 1"
		},
		{
			src: "tabletopgamedesign/Cover_B.png",
			alt: "Tabletops Game Design, image 2"
		}
	],
	links: [
		{
			label: "Buy On Amazon",
			url: "https://www.amazon.com/dp/B0DJ1XYPQ5?ref_=pe_93986420_774957520"
		}
	],
	tags: [
		"board games",
		"boards",
		"game",
		"game design",
		"tabletop games",
		"book",
		"prose",
		"written",
		"manual",
		"prototyping",
		"dungeons",
		"character sheets",
		"game assets"
	]
},
{
	id: "juggler-juggling",
	title: "Juggler Juggling",
	summary: "Juggler Juggling is a iOS app.",
	category: "projects",
	thumb: "myIcons/navTopic/JugglerJugglingTopic.jpg",
	banner: "myIcons/navRelated/JugglerJugglingRelated_0.jpg",
	year: 2022,
	video: "vimeo:724122827",
	text: [
		"Juggler Juggling is a iOS app. Challenge your digit dexterity with this juggling simulation GAME in where you keep as many balls moving as selected by a possible maximum difficulty of 10! Just keep swiping UP, don’t catch more than one and don't DROP! Open your steamer trunk of challenges and earn NEW PROPS with a incredible amount of CATCHES! Open your steamer trunk of challenges and earn NEW PROPS with a incredible amount of CATCHES!"
	],
	links: [
		{
			label: "Juggler Juggling",
			url: "https://www.jugglerjuggling.com"
		},
		{
			label: "GAME",
			url: "https://apps.apple.com/us/app/juggler-juggling/id1631303229"
		}
	],
	tags: [
		"game",
		"juggler",
		"juggling",
		"ios",
		"openframeworks"
	]
},
{
	id: "starlinedivsegdistofsmallestdiv",
	title: "starLineDivSegDistOfSmallestDiv",
	summary: "Star Line Div Seg Dist Of Smallest Div",
	category: "projects",
	thumb: "myIcons/navTopic/starLineDivTopic.jpg",
	banner: "myIcons/navRelated/starLineDivRelated.jpg",
	year: 2019,
	video: "vimeo:376866271",
	text: [
		"Star Line Div Seg Dist Of Smallest Div"
	],
	tags: [
		"divides",
		"vector",
		"line",
		"ratio",
		"algorithm",
		"openframeworks"
	]
},
{
	id: "vectordivlinesegdistofsmallestdiv",
	title: "vectorDivLineSegDistOfSmallestDiv",
	summary: "Vector Div Line Seg Dist Of Smallest Div",
	category: "projects",
	thumb: "myIcons/navTopic/vectorDivLineSegDistOfSmallestDivTopic.jpg",
	banner: "myIcons/navRelated/vectorDivLineSegDistOfSmallestDivRelated.jpg",
	year: 2019,
	video: "vimeo:376865649",
	text: [
		"Vector Div Line Seg Dist Of Smallest Div"
	],
	tags: [
		"divides",
		"vector",
		"line",
		"ratio",
		"algorithm",
		"openframeworks"
	]
},
{
	id: "divideslinegivenratio",
	title: "DividesLineGivenRatio",
	category: "projects",
	thumb: "myIcons/navTopic/DividesLineGivenRatioTopic.jpg",
	banner: "myIcons/navRelated/DividesLineGivenRatioRelated.jpg",
	year: 2019,
	video: "vimeo:376861989",
	tags: [
		"divides",
		"line",
		"ratio",
		"algorithm",
		"openframeworks"
	]
},
{
	id: "springsxenostars-2",
	title: "springsXenoStars_2",
	category: "projects",
	thumb: "myIcons/navTopic/springsXenoStarsTopic_2.jpg",
	banner: "myIcons/navRelated/springsXenoStarsRelated_2.jpg",
	year: 2019,
	video: "vimeo:351107831",
	tags: [
		"springs",
		"stars",
		"animation",
		"openframeworks"
	]
},
{
	id: "springsxenostars-1",
	title: "springsXenoStars_1",
	category: "projects",
	thumb: "myIcons/navTopic/springsXenoStarsTopic_1.jpg",
	banner: "myIcons/navRelated/springsXenoStarsRelated_1.jpg",
	year: 2019,
	video: "vimeo:351107374",
	tags: [
		"springs",
		"stars",
		"animation",
		"openframeworks"
	]
},
{
	id: "springsxenostars-0",
	title: "springsXenoStars_0",
	category: "projects",
	thumb: "myIcons/navTopic/springsXenoStarsTopic_0.jpg",
	banner: "myIcons/navRelated/springsXenoStarsRelated_0.jpg",
	year: 2019,
	video: "vimeo:351106843",
	tags: [
		"springs",
		"stars",
		"animation",
		"openframeworks"
	]
},
{
	id: "crossbonesas0",
	title: "CrossbonesAs0",
	summary: "Int To Character To Img / Crossbones As 0",
	category: "projects",
	thumb: "myIcons/navTopic/IntCharacterImgTopic_0.jpg",
	banner: "myIcons/navRelated/IntCharacterImgRelated_0.jpg",
	year: 2019,
	video: "vimeo:316068956",
	text: [
		"Int To Character To Img / Crossbones As 0"
	],
	tags: [
		"crossbones",
		"character to img",
		"animation",
		"openframeworks"
	]
},
{
	id: "jugglinganimation",
	title: "jugglingAnimation",
	summary: "Juggling animation / radCosSin",
	category: "projects",
	thumb: "myIcons/navTopic/jugglingAnimationTopic_0.jpg",
	banner: "myIcons/navRelated/jugglingAnimationRelated_0.jpg",
	year: 2019,
	video: "vimeo:314634637",
	text: [
		"Juggling animation / radCosSin"
	],
	tags: [
		"juggling",
		"animation",
		"radcossin",
		"openframeworks"
	]
},
{
	id: "unicyclesprite",
	title: "unicycleSprite",
	summary: "Run Unicycle Sprite with ofxSpriteSheetRenderer To Points",
	category: "projects",
	thumb: "myIcons/navTopic/moveToPointsUnicycleSpriteTopic_0.jpg",
	banner: "myIcons/navRelated/moveToPointsUnicycleSpriteRelated_0.jpg",
	year: 2017,
	video: "vimeo:313083213",
	text: [
		"Run Unicycle Sprite with ofxSpriteSheetRenderer To Points"
	],
	tags: [
		"sprite",
		"spritesheet",
		"ofxspritesheetrenderer",
		"flower",
		"move to points",
		"unicycle",
		"openframeworks"
	]
},
{
	id: "movetopointssprite",
	title: "moveToPointsSprite",
	category: "projects",
	thumb: "myIcons/navTopic/moveToPointsSpriteTopic_0.jpg",
	banner: "myIcons/navRelated/moveToPointsSpriteRelated_0.jpg",
	year: 2017,
	video: "vimeo:313082774",
	tags: [
		"sprite",
		"spritesheet",
		"ofxspritesheetrenderer",
		"flower",
		"move to points",
		"animation",
		"openframeworks"
	]
},
{
	id: "movetopoints-2",
	title: "moveToPoints_2",
	category: "projects",
	thumb: "myIcons/navTopic/moveToPointsTopic_0.jpg",
	banner: "myIcons/navRelated/moveToPointsRelated_0.jpg",
	year: 2017,
	video: "vimeo:313082467",
	tags: [
		"sprite",
		"spritesheet",
		"ofxspritesheetrenderer",
		"flower",
		"move to points",
		"animation",
		"openframeworks"
	]
},
{
	id: "flowersprite-1",
	title: "FlowerSprite_1",
	summary: "Run Flower Sprite 1 with ofxSpriteSheetRenderer.",
	category: "projects",
	thumb: "myIcons/navTopic/FlowerSpriteTopic_1_0.jpg",
	banner: "myIcons/navRelated/FlowerSpriteRelated_1_0.jpg",
	year: 2017,
	video: "vimeo:313081884",
	text: [
		"Run Flower Sprite 1 with ofxSpriteSheetRenderer."
	],
	tags: [
		"sprite",
		"spritesheet",
		"ofxspritesheetrenderer",
		"flower",
		"openframeworks"
	]
},
{
	id: "flowersprite-0",
	title: "FlowerSprite_0",
	summary: "Run Flower Sprite 0 with ofxSpriteSheetRenderer.",
	category: "projects",
	thumb: "myIcons/navTopic/flowerSpriteTopic_0_0.jpg",
	banner: "myIcons/navRelated/flowerSpriteRelated_0_0.jpg",
	year: 2017,
	video: "vimeo:313081453",
	text: [
		"Run Flower Sprite 0 with ofxSpriteSheetRenderer."
	],
	tags: [
		"sprite",
		"spritesheet",
		"ofxspritesheetrenderer",
		"flower",
		"openframeworks"
	]
},
{
	id: "greatwave",
	title: "GreatWave",
	summary: "Hokusai The Great Wave Off Kanagawa / Averaging Pix Table Change Radiuses of ofDrawEllipse.",
	category: "projects",
	thumb: "myIcons/navTopic/greatWaveAveragingPixTableTopic_0.jpg",
	banner: "myIcons/navRelated/greatWaveAveragingPixTableRelated_0.jpg",
	year: 2017,
	video: "vimeo:313027349",
	text: [
		"Hokusai The Great Wave Off Kanagawa / Averaging Pix Table Change Radiuses of ofDrawEllipse."
	],
	tags: [
		"averaging",
		"pix table",
		"pix",
		"hokusai",
		"openframeworks"
	]
},
{
	id: "cindysherman",
	title: "CindySherman",
	summary: "Cindy Sherman / Pix Table Change Radiuses of ofDrawEllipse.",
	category: "projects",
	thumb: "myIcons/navTopic/cindyShermanAveragingPixTableTopic_0.jpg",
	banner: "myIcons/navRelated/cindyShermanAveragingPixTableRelated_0.jpg",
	year: 2017,
	video: "vimeo:313025670",
	text: [
		"Cindy Sherman / Pix Table Change Radiuses of ofDrawEllipse."
	],
	tags: [
		"averaging",
		"pix table",
		"pix",
		"cindy sherman",
		"openframeworks"
	]
},
{
	id: "aliceneelmotherandchild",
	title: "AliceNeelMotherAndChild",
	summary: "Alice Neel Mother And Child Averaging / Pix Table change Radiuses of ofDrawEllipse",
	category: "projects",
	thumb: "myIcons/navTopic/childAveragingPixTableTopic_0.jpg",
	banner: "myIcons/navRelated/childAveragingPixTableRelated_0.jpg",
	year: 2017,
	video: "vimeo:313024672",
	text: [
		"Alice Neel Mother And Child Averaging / Pix Table change Radiuses of ofDrawEllipse"
	],
	tags: [
		"averaging",
		"pix table",
		"pix",
		"alice neel",
		"ofdrawellipse",
		"openframeworks"
	]
},
{
	id: "changeradiuses-1",
	title: "changeRadiuses_1",
	summary: "change Radiuses of ofDrawEllipse.",
	category: "projects",
	thumb: "myIcons/navTopic/changeRadiusesTopic_1_0.jpg",
	banner: "myIcons/navRelated/changeRadiusesRelated_0.jpg",
	year: 2017,
	video: "vimeo:313023495",
	text: [
		"change Radiuses of ofDrawEllipse."
	],
	tags: [
		"averaging",
		"pix table",
		"pix",
		"ofdrawellipse",
		"openframeworks"
	]
},
{
	id: "averagetest-0",
	title: "averageTest_0",
	category: "projects",
	thumb: "myIcons/navTopic/averageTestTopic_0.jpg",
	banner: "myIcons/navRelated/averageTestRelated_0.jpg",
	year: 2017,
	video: "vimeo:313021699",
	tags: [
		"averaging",
		"pix table",
		"pix",
		"openframeworks"
	]
},
{
	id: "obama-pardon-edward-snowden",
	title: "Obama Pardon Edward Snowden",
	summary: "I need to improve this but fun...",
	category: "projects",
	thumb: "myIcons/navTopic/ObamaTopic_0.jpg",
	banner: "myIcons/navRelated/ObamaRelated_0.jpg",
	year: 2000,
	video: "vimeo:173425794",
	text: [
		"I need to improve this but fun... !-)"
	],
	links: [
		{
			label: "ofxFaceTracker",
			url: "https://github.com/kylemcdonald/ofxFaceTracker"
		}
	],
	tags: [
		"tracking",
		"face tracking",
		"pardoning snowden",
		"openframeworks"
	]
},
{
	id: "weiqibeats",
	title: "WéiqíBeats",
	summary: "Procedural Art made from Wéiqí / Go games.",
	category: "projects",
	thumb: "myIcons/navTopic/WeiqiBeatsTopic_0.jpg",
	banner: "myIcons/navRelated/WeiqiBeatsRelated_0.jpg",
	year: 2016,
	text: [
		"Procedural Art made from Wéiqí / Go games. This Game is from 1991 Ranka Yearbook. The 5th Japan-China Super Go Series. Game 7: Yamashiro Vs Yu Bin .pg 64",
		"Tientsin City on 23 February 1990"
	],
	tags: [
		"go",
		"game",
		"audio",
		"tracking",
		"openframeworks",
		"max"
	]
},
{
	id: "face-tracking-art-bust-sculpture-augmented-mask-animation",
	title: "Face Tracking Art / Bust (sculpture) - Augmented Mask Animation",
	summary: "As a whole this is an opportunity to animate over faces in real time.",
	category: "projects",
	thumb: "myIcons/navTopic/AugmentedMaskTopic_0.jpg",
	banner: "myIcons/navRelated/AugmentedMaskRelated_0.jpg",
	year: 2014,
	video: "vimeo:103338706",
	text: [
		"As a whole this is an opportunity to animate over faces in real time. Technology allows all of us to exploit our human similarities to augment personal and shared desires on the world around us. Artifacts are no exception and could be some of the only clear reasons to layer reality at all.",
		"Each part of the mask I drew and saved into a XML files. I mix between those pictures by using openFrameworks. Addons ofxFaceTracker / ofxTween. Beatboxing goes best with line drawings.",
		"The Metropolitan Museum of Art MediaLab."
	],
	links: [
		{
			label: "obfuscate",
			url: "https://soundcloud.com/lee-meredith/obfuscate"
		},
		{
			label: "OpenCV",
			url: "http://opencv.org"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "ofxFaceTracker",
			url: "https://github.com/kylemcdonald/ofxFaceTracker"
		},
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		},
		{
			label: "MediaLab",
			url: "http://www.metmuseum.org/about-the-met/office-of-the-director/digital-department/medialab"
		}
	],
	tags: [
		"face tracking",
		"drawings",
		"ofxopencv",
		"met",
		"museum",
		"animation",
		"augmented reality",
		"openframeworks"
	]
},
{
	id: "electromyography",
	title: "Electromyography",
	summary: "I am using ofxLeapMotion / ofxBullet with electromyography (EMG) Muscle Sensor to evaluate the electrical activity of the muscles associated with the ring...",
	category: "projects",
	thumb: "myIcons/navTopic/ElectromyographyTopic_0.jpg",
	banner: "myIcons/navRelated/ElectromyographyRelated_0.jpg",
	year: 2014,
	video: "vimeo:100045549",
	text: [
		"I am using ofxLeapMotion / ofxBullet with electromyography (EMG) Muscle Sensor to evaluate the electrical activity of the muscles associated with the ring finger to apply central force to the boxes on screen and manipulate them in three dimensions by utilizing the coordinates of the index finger.",
		"I use force and direction in a similar way after stacking the boxes to knock them over. I snap my fingers and point.",
		"Audio in Video is dust bowl refugee"
	],
	links: [
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		},
		{
			label: "ofxBullet",
			url: "https://github.com/NickHardeman/ofxBullet"
		},
		{
			label: "ofxLeapMotion",
			url: "https://github.com/ofTheo/ofxLeapMotion"
		},
		{
			label: "Muscle Sensor",
			url: "http://www.advancertechnologies.com/2013/09/muscle-sensor-v3-back-in-stock.html"
		},
		{
			label: "dust bowl refugee",
			url: "https://soundcloud.com/lee-meredith/dust-bowl-refugee"
		}
	],
	tags: [
		"electromyography",
		"arduino",
		"virtual prosthetics",
		"emg",
		"openframeworks"
	]
},
{
	id: "play-test-virtual-prosthetics",
	title: "Play Test / Virtual Prosthetics",
	summary: "This is a Play Test.",
	category: "projects",
	thumb: "myIcons/navTopic/PlayTestVirtualProstTopic_0.jpg",
	banner: "myIcons/navRelated/PlayTestVirtualProstRelated_0.jpg",
	year: 2014,
	video: "vimeo:98825416",
	text: [
		"This is a Play Test. I am using ofxKinect / ofxBullet for Virtual Prosthetics project.",
		"Virtual Prosthetics Kinect Pic"
	],
	links: [
		{
			label: "Virtual Prosthetics Kinect",
			url: "https://www.flickr.com/photos/antisuji/sets/72157645333685413/"
		},
		{
			label: "ofxBullet",
			url: "https://github.com/NickHardeman/ofxBullet"
		},
		{
			label: "ofxKinect",
			url: "https://github.com/ofTheo/ofxKinect"
		}
	],
	tags: [
		"virtual prosthetics",
		"ofxkinect",
		"openframeworks"
	]
},
{
	id: "virtual-prosthetics-bullet-and-leap",
	title: "Virtual Prosthetics Bullet and Leap",
	summary: "This is me using ofxLeapMotion / ofxBullet for a Virtual Prosthetics project.",
	category: "projects",
	thumb: "myIcons/navTopic/VirtualProstBulletLeapTopic_0.jpg",
	banner: "myIcons/navRelated/VirtualProstBulletLeapRelated_0.jpg",
	year: 2014,
	video: "vimeo:98807834",
	text: [
		"This is me using ofxLeapMotion / ofxBullet for a Virtual Prosthetics project."
	],
	links: [
		{
			label: "ofxBullet",
			url: "https://github.com/NickHardeman/ofxBullet"
		},
		{
			label: "ofxLeapMotion",
			url: "https://github.com/ofTheo/ofxLeapMotion"
		}
	],
	tags: [
		"virtual prosthetics",
		"openframeworks"
	]
},
{
	id: "visually-implied-audio",
	title: "Visually Implied Audio",
	summary: "Pink from Tintaz Custom Skateboard Decks By Beto Mendoza",
	category: "projects",
	thumb: "myIcons/navTopic/VisuallyImpliedAudioTopic_0.jpg",
	banner: "myIcons/navRelated/VisuallyImpliedAudioRelated_0.jpg",
	year: 2014,
	video: "vimeo:98182942",
	text: [
		"Pink from Tintaz Custom Skateboard Decks By Beto Mendoza"
	],
	links: [
		{
			label: "Norman McLaren",
			url: "https://en.wikipedia.org/wiki/Norman_McLaren"
		},
		{
			label: "Custom Skateboard",
			url: "http://www.lowrider.com/lifestyle/art/1403-tintaz-custom-skateboard-decks/"
		},
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animation",
		"drawing",
		"animator",
		"drawings",
		"openframeworks"
	]
},
{
	id: "first-steps-walk-cycle",
	title: "First Steps / Walk Cycle",
	summary: "Angry Animator tutorial-2 : walk cycle",
	category: "projects",
	thumb: "myIcons/navTopic/firstStepsTopic_0.jpg",
	banner: "myIcons/navRelated/firstStepsRelated_0.jpg",
	year: 2014,
	video: "vimeo:95767888",
	text: [
		"Angry Animator tutorial-2 : walk cycle"
	],
	links: [
		{
			label: "Angry Animator",
			url: "http://www.angryanimator.com/word/2010/11/26/tutorial-2-walk-cycle/"
		}
	],
	tags: [
		"animator",
		"walk-cycle",
		"animation",
		"drawings",
		"openframeworks"
	]
},
{
	id: "hats-and-flower",
	title: "Hats and Flower",
	summary: "Looking at relationships between the perception of a concept of a single living object and a classification of the utilitarian.",
	category: "projects",
	thumb: "myIcons/navTopic/hatsFlowerTopic_0.jpg",
	banner: "myIcons/navRelated/hatsFlowerRelated_0.jpg",
	year: 2014,
	video: "vimeo:95591165",
	text: [
		"Looking at relationships between the perception of a concept of a single living object and a classification of the utilitarian."
	],
	links: [
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animator",
		"animation",
		"hats",
		"drawings",
		"openframeworks"
	]
},
{
	id: "mix-set-xml",
	title: "mix / set XML",
	category: "projects",
	thumb: "myIcons/navTopic/zRandomTopic_0.jpg",
	banner: "myIcons/navRelated/zRandomRelated_0.jpg",
	year: 2014,
	video: "vimeo:95267375",
	links: [
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animator",
		"animation",
		"drawings",
		"openframeworks"
	]
},
{
	id: "frame-animator-xml",
	title: "Frame Animator XML",
	category: "projects",
	thumb: "myIcons/navTopic/mixDrawXMLTopic_0.jpg",
	banner: "myIcons/navRelated/mixDrawXMLRelated_0.jpg",
	year: 2014,
	video: "vimeo:92760756",
	links: [
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animator",
		"animation",
		"drawings",
		"openframeworks"
	]
},
{
	id: "frame-animator-easing-types",
	title: "Frame Animator Easing Types",
	summary: "Mixed with All Tween and Easing Types from ofxTween.",
	category: "projects",
	thumb: "myIcons/navTopic/mixedAllTweenTopic_0.jpg",
	banner: "myIcons/navRelated/mixedAllTweenRelated_0.jpg",
	year: 2014,
	video: "vimeo:92044025",
	text: [
		"Mixed with All Tween and Easing Types from ofxTween."
	],
	links: [
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animator",
		"animation",
		"drawings",
		"openframeworks"
	]
},
{
	id: "frame-animator-mixed-with-tween",
	title: "Frame Animator Mixed with Tween",
	summary: "Base mixDrawings / thickness \"drawing-examples\" and ofxTween",
	category: "projects",
	thumb: "myIcons/navTopic/animatorMixedTopic_0.jpg",
	banner: "myIcons/navRelated/animatorMixedRelated_0.jpg",
	year: 2014,
	video: "vimeo:89224368",
	text: [
		"Base mixDrawings / thickness \"drawing-examples\" and ofxTween"
	],
	links: [
		{
			label: "drawing-examples",
			url: "https://github.com/ofZach/drawing-examples"
		},
		{
			label: "ofxTween",
			url: "https://github.com/arturoc/ofxTween"
		}
	],
	tags: [
		"animator",
		"animation",
		"drawings",
		"openframeworks"
	]
},
{
	id: "obama-pardoning-snowden",
	title: "Obama Pardoning Snowden",
	summary: "President Obama Pardoning Snowden on Turntable (with linear hall effect sensor placed at both ends of crossfader)!",
	category: "projects",
	thumb: "myIcons/navTopic/PardoningSnowdenTurntableTopic_0.jpg",
	banner: "myIcons/navRelated/PardoningSnowdenTurntableRelated_0.jpg",
	year: 2014,
	video: "vimeo:85678131",
	text: [
		"President Obama Pardoning Snowden on Turntable (with linear hall effect sensor placed at both ends of crossfader)!",
		"Peter Gabriel - Digging in the Dirt"
	],
	links: [
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		},
		{
			label: "dialogger",
			url: "https://github.com/leeMeredith/dialogger"
		},
		{
			label: "ofxXwax",
			url: "https://github.com/scratchml/ofxXwax"
		},
		{
			label: "Digging in the Dirt",
			url: "https://en.wikipedia.org/wiki/Digging_in_the_Dirt"
		}
	],
	tags: [
		"dialogger",
		"ofxxwax",
		"arduino",
		"hall effect",
		"dj",
		"vj",
		"control vinyl",
		"text",
		"turntable",
		"color picker",
		"pardoning snowden",
		"openframeworks"
	]
},
{
	id: "dialogger-howto",
	title: "Dialogger - howTo",
	category: "projects",
	thumb: "myIcons/navTopic/DialoggerhowToTopic_0.jpg",
	banner: "myIcons/navRelated/DialoggerhowToRelated_0.jpg",
	year: 2013,
	video: "vimeo:82813675",
	links: [
		{
			label: "Dialogger",
			url: "https://github.com/leeMeredith/dialogger"
		}
	],
	tags: [
		"dialogger",
		"how to",
		"animation"
	]
},
{
	id: "nowhistle-turntable-lip-syncing",
	title: "noWhistle - Turntable Lip Syncing",
	summary: "Dialogger is for individuals that need a simple and effective technique to create any dialog needed in a openFrameworks app.",
	category: "projects",
	thumb: "myIcons/navTopic/noWhistleTopic_0.jpg",
	banner: "myIcons/navRelated/noWhistleRelated_0.jpg",
	year: 2013,
	video: "vimeo:82809098",
	text: [
		"Dialogger is for individuals that need a simple and effective technique to create any dialog needed in a openFrameworks app.",
		"By using keystrokes as well as a slider / timecode vinyl a user can address an audio file by millisecond / timecode vinyl for phrases, words and corresponding A-F mouth shapes or any image.",
		"Ms. Pinky / ofxXmlSettings / ofxOsc"
	],
	links: [
		{
			label: "Dialogger",
			url: "https://github.com/leeMeredith/dialogger"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "ofxXmlSettings",
			url: "https://github.com/geoffdonaldson/ofxXmlSettings"
		},
		{
			label: "ofxOsc",
			url: "http://damianstewart.com/ofxosc/"
		},
		{
			label: "Tutorial-3",
			url: "http://www.angryanimator.com/word/2010/11/26/tutorial-3-dialog/"
		}
	],
	tags: [
		"dialogger",
		"timecode vinyl",
		"vinyl",
		"beat juggling",
		"animation",
		"lip",
		"lip syncing",
		"juggling",
		"openframeworks"
	]
},
{
	id: "thedemodemo",
	title: "TheDemoDemo",
	summary: "Dialogger is for individuals that need a simple and effective technique to create any dialog needed in a openFrameworks app.",
	category: "projects",
	thumb: "myIcons/navTopic/TheDemoDemoTopic_0.jpg",
	banner: "myIcons/navRelated/TheDemoDemoRelated_0.jpg",
	year: 2013,
	video: "vimeo:82808404",
	text: [
		"Dialogger is for individuals that need a simple and effective technique to create any dialog needed in a openFrameworks app.",
		"By using keystrokes as well as a slider / timecode vinyl a user can address an audio file by millisecond / timecode vinyl for phrases, words and corresponding A-F mouth shapes or any image.",
		"The Mother of All Demos, (1968)"
	],
	links: [
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "ofxXmlSettings",
			url: "https://github.com/geoffdonaldson/ofxXmlSettings"
		},
		{
			label: "ofxOsc",
			url: "http://damianstewart.com/ofxosc/"
		},
		{
			label: "Dialogger",
			url: "https://github.com/leeMeredith/dialogger"
		},
		{
			label: "The Mother of All Demos",
			url: "https://www.youtube.com/watch?v=yJDv-zdhzMY"
		}
	],
	tags: [
		"dialogger",
		"lip",
		"lip syncing",
		"openframeworks"
	]
},
{
	id: "speech-scroll",
	title: "Speech Scroll",
	summary: "Noise Field, Words Springs.",
	category: "projects",
	thumb: "myIcons/navTopic/SpeechScrollHamletTopic_0.jpg",
	banner: "myIcons/navRelated/SpeechScrollHamletRelated_0.jpg",
	year: 2012,
	video: "vimeo:52105345",
	text: [
		"Noise Field, Words Springs. Hamlet, Act 2 Scene 2 - Words, words, words."
	],
	links: [
		{
			label: "Hamlet",
			url: "https://en.wikipedia.org/wiki/Hamlet"
		},
		{
			label: "Speech Scroll",
			url: "https://en.wikipedia.org/wiki/Speech_scroll"
		}
	],
	tags: [
		"typography",
		"text",
		"font",
		"speech scroll",
		"hamlet",
		"springs",
		"openframeworks"
	]
},
{
	id: "speech-scroll-test-1",
	title: "Speech Scroll Test 1",
	category: "projects",
	thumb: "myIcons/navTopic/SpeechScrollTestTopic_0.jpg",
	banner: "myIcons/navRelated/SpeechScrollTestRelated_0.jpg",
	year: 2012,
	video: "vimeo:51115092",
	links: [
		{
			label: "Speech Scroll",
			url: "https://en.wikipedia.org/wiki/Speech_scroll"
		}
	],
	tags: [
		"typography",
		"text",
		"font",
		"speech scroll",
		"springs",
		"openframeworks"
	]
},
{
	id: "augmented-reality-mirror-mirror-box-example",
	title: "Augmented Reality Mirror / Mirror Box Example",
	summary: "(ARM) is for individuals with unilateral limb loss and intended to manage phantom limb pain (PLP).",
	category: "projects",
	thumb: "myIcons/navTopic/ARMTopic_0.jpg",
	banner: "myIcons/navRelated/ARMRelated_0.jpg",
	year: 2012,
	video: "vimeo:49252026",
	text: [
		"(ARM) is for individuals with unilateral limb loss and intended to manage phantom limb pain (PLP).",
		"The Augmented reality mirror therapy app uses the Kinect to capture a real time image of the intact limb and the (ARM) app then create a digital mirror limb (phantom limb) image. Then, the user can observe their intact limb and phantom limb on a monitor with the ability to control their point of view in 360 degrees of freedom.",
		"Virtual Prosthetics Kinect Pic",
		"Augmented Reality Mirror Therapy For Phantom LimbPain Abstract",
		"Kareemah Batts, Desmond Heeley, Joe Labrie, Michael Lichter, Jennifer Eftychiou PT DPT, Jeffrey Heckman DO"
	],
	links: [
		{
			label: "ARM",
			url: "https://github.com/leeMeredith/AugmentedRealityMirror"
		},
		{
			label: "ofxKinect",
			url: "https://github.com/ofTheo/ofxKinect"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Virtual Prosthetics Kinect",
			url: "https://www.flickr.com/photos/antisuji/sets/72157645333685413/"
		},
		{
			label: "OpenCV",
			url: "http://opencv.org"
		},
		{
			label: "Abstract",
			url: "assets/text/ARM/AugmentedRealityMirrorTherapyForPhantomLimbPain.pdf"
		}
	],
	tags: [
		"arm",
		"virtual prosthetics",
		"phantom limb",
		"ofxkinect",
		"openframeworks",
		"paper"
	]
},
{
	id: "kinect-setup-arm-amputation-level-bk-below-the-knee",
	title: "Kinect Setup / ARM Amputation Level BK- Below the knee",
	category: "projects",
	thumb: "myIcons/navTopic/KinectSetupARMTopic_0.jpg",
	banner: "myIcons/navRelated/KinectSetupARMRelated_0.jpg",
	year: 2012,
	images: [
		{
			src: "ARM/vpkinect_0.jpg",
			alt: "Kinect Setup / ARM Amputation Level BK- Below the knee, image 1"
		},
		{
			src: "ARM/vpkinect_1.jpg",
			alt: "Kinect Setup / ARM Amputation Level BK- Below the knee, image 2"
		},
		{
			src: "ARM/vpkinect_2.jpg",
			alt: "Kinect Setup / ARM Amputation Level BK- Below the knee, image 3"
		},
		{
			src: "ARM/vpkinect_3.jpg",
			alt: "Kinect Setup / ARM Amputation Level BK- Below the knee, image 4"
		},
		{
			src: "ARM/vpkinect_4.jpg",
			alt: "Kinect Setup / ARM Amputation Level BK- Below the knee, image 5"
		}
	],
	tags: [
		"arm",
		"virtual prosthetics",
		"phantom limb",
		"ofxkinect",
		"openframeworks"
	]
},
{
	id: "my-ir-fiber-optic-paint-brush",
	title: "My IR Fiber Optic Paint Brush",
	summary: "The brush itself is very easy to make.",
	category: "projects",
	thumb: "myIcons/navTopic/MyIRFiberTopic_0.jpg",
	banner: "myIcons/navRelated/MyIRFiberRelated_0.jpg",
	year: 2012,
	video: "vimeo:46933334",
	text: [
		"The brush itself is very easy to make. The thing you will not be able to see from the video is that I use a shrink tube to attach the Fiber Optic cable to the IR LED before I stuck it into the shell of a ballpoint pen. Excluding the color picker the openFrameworks app is a mix of 2 app's fboTrailsExample and opencvExample. I would like to project on the glass in the future."
	],
	links: [
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "OpenCV",
			url: "http://opencv.org"
		}
	],
	tags: [
		"ir",
		"fiber optic",
		"hand-painted",
		"paint",
		"brush",
		"opencv",
		"color picker",
		"2d",
		"openframeworks"
	]
},
{
	id: "crossfader-hack-i-love-magnetic",
	title: "Crossfader Hack / I Love Magnetic",
	summary: "2 Allegro A1321 linear hall effect sensor placed at both ends of crossfader.",
	category: "projects",
	thumb: "myIcons/navTopic/CrossfaderHackTopic_0.jpg",
	banner: "myIcons/navRelated/CrossfaderHackRelated_0.jpg",
	year: 2012,
	video: "vimeo:45619796",
	text: [
		"2 Allegro A1321 linear hall effect sensor placed at both ends of crossfader."
	],
	links: [
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"magnetic",
		"arduino",
		"pcom",
		"hall effect",
		"dj",
		"scratch",
		"timecode vinyl",
		"text"
	]
},
{
	id: "hand-sampler-test",
	title: "Hand Sampler test",
	summary: "Finger tracking sampler test (audio in one speaker only)",
	category: "projects",
	thumb: "myIcons/navTopic/handSamplerTopic_0.jpg",
	banner: "myIcons/navRelated/handSamplerRelated_0.jpg",
	year: 2012,
	video: "vimeo:40020251",
	text: [
		"Finger tracking sampler test (audio in one speaker only)"
	],
	links: [
		{
			label: "The Warriors",
			url: "https://en.wikipedia.org/wiki/The_Warriors_(film)"
		}
	],
	tags: [
		"cv",
		"sampler",
		"finger tracking",
		"tracking",
		"openframeworks"
	]
},
{
	id: "ofxxwax-2nd-test-with-audio-crossfader-and-two-turntables",
	title: "ofxXwax 2nd test with audio, crossfader and two turntables",
	summary: "This is done in openframeworks and with a Arduino.",
	category: "projects",
	thumb: "myIcons/navTopic/ofxXwaxAudioTopic_0.jpg",
	banner: "myIcons/navRelated/ofxXwaxAudioRelated_0.jpg",
	year: 2012,
	video: "vimeo:37353636",
	text: [
		"This is done in openframeworks and with a Arduino.",
		"The audio is Ms. Pinky and torq control vinyl.",
		"Marie Colvin last report from Syria.",
		"Burgess Meredith in Rocky 3 as Mickey Goldmill",
		"xwax / ofxXwax / ofxSoundStream / scratch-markup-language"
	],
	links: [
		{
			label: "Marie Colvin",
			url: "https://en.wikipedia.org/wiki/Marie_Colvin"
		},
		{
			label: "last report",
			url: "https://www.youtube.com/watch?v=nww7rRSq0x8&bpctr=1459825783"
		},
		{
			label: "Burgess Meredith",
			url: "https://en.wikipedia.org/wiki/Burgess_Meredith"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "ofxXwax",
			url: "https://github.com/scratchml/ofxXwax"
		},
		{
			label: "xwax",
			url: "http://xwax.org"
		},
		{
			label: "ofxSoundStream",
			url: "https://github.com/jocabola/ofxSoundStream"
		},
		{
			label: "SML",
			url: "http://fffff.at/scratch-markup-language-sml/"
		}
	],
	tags: [
		"juggling",
		"arduino",
		"dj",
		"openframeworks"
	]
},
{
	id: "ofxxwax-test-with-two-turntables",
	title: "ofxXwax test with two turntables",
	summary: "This is done in openframeworks.",
	category: "projects",
	thumb: "myIcons/navTopic/ofxXwaxNoATopic_0.jpg",
	banner: "myIcons/navRelated/ofxXwaxNoARelated_0.jpg",
	year: 2012,
	video: "vimeo:37037336",
	text: [
		"This is done in openframeworks.",
		"A ofxXwax test using two turntables with ofxSoundStream. No audio out."
	],
	links: [
		{
			label: "ofxXwax",
			url: "https://github.com/scratchml/ofxXwax"
		},
		{
			label: "xwax",
			url: "http://xwax.org"
		},
		{
			label: "ofxSoundStream",
			url: "https://github.com/jocabola/ofxSoundStream"
		}
	],
	tags: [
		"dj",
		"vj",
		"ofxxwax",
		"openframeworks"
	]
},
{
	id: "trackertest",
	title: "trackerTest",
	category: "projects",
	thumb: "myIcons/navTopic/trackerTestTopic_0.jpg",
	banner: "myIcons/navRelated/trackerTestRelated_0.jpg",
	year: 2011,
	video: "vimeo:33633625",
	links: [
		{
			label: "ofxiPhone",
			url: "http://openframeworks.cc/setup/iphone/"
		}
	],
	tags: [
		"ios",
		"iphone"
	]
},
{
	id: "color-picker-in-random-range-reverse-folk",
	title: "Color Picker in Random Range / Reverse Folk",
	summary: "Load Image And Select Pixel In Random Range / I Love Folk Songs Played In Reverse.",
	category: "projects",
	thumb: "myIcons/navTopic/ColorPickerRandTopic_0.jpg",
	banner: "myIcons/navRelated/ColorPickerRandRelated_0.jpg",
	year: 2011,
	video: "vimeo:18568479",
	text: [
		"Load Image And Select Pixel In Random Range / I Love Folk Songs Played In Reverse.",
		"Folk Songs Don McLean - Vincent"
	],
	links: [
		{
			label: "Don McLean",
			url: "https://en.wikipedia.org/wiki/Don_McLean"
		}
	],
	tags: [
		"setpixel",
		"color picker",
		"paint",
		"openframeworks"
	]
},
{
	id: "can-12-angry-men-color-track-the-traditional",
	title: "CAN 12 angry men color track the traditional",
	summary: "Color tracking the traditional DJ dot / Big fat cursor in the middle of the graphics CAN \"vitamin C\" / 12 Angry Men Remix",
	category: "projects",
	thumb: "myIcons/navTopic/CANAngryMenTopic_0.jpg",
	banner: "myIcons/navRelated/CANAngryMenRelated_0.jpg",
	year: 2010,
	video: "vimeo:15753285",
	text: [
		"Color tracking the traditional DJ dot / Big fat cursor in the middle of the graphics CAN \"vitamin C\" / 12 Angry Men Remix",
		"I have been manipulating the turntable with the elbow of the arm that is scratching the other turntable, which allows me to control the cross fader as if I had a phantom limb.",
		"If this is a new move, I would like to name it \"FLEX\" after the original elbow-turntables \"DJ Flex\" Patrick Lewis",
		"thanks to OpenCV, openFrameworks, Ms. Pinky, Dr. Gottfried Ungerboeck, \"DJ Flex\" Patrick Lewis"
	],
	links: [
		{
			label: "CAN",
			url: "https://en.wikipedia.org/wiki/Can_(band)"
		},
		{
			label: "12 Angry Men",
			url: "https://en.wikipedia.org/wiki/12_Angry_Men_(1957_film)"
		},
		{
			label: "DJ Flex",
			url: "https://books.google.com/books?id=vcADAAAAMBAJ&pg=PA34&lpg=PA34&dq=%22DJ+Flex+%22+Patrick+Lewis&source=bl&ots=HqqC9UwCIz&sig=G_Np-i3zmlcloZm3B6J7RKuqd7o&hl=en&sa=X&ved=0ahUKEwjo8cTHzITMAhWGeD4KHcxzD_IQ6AEIHTAA#v=onepage&q=%22DJ%20Flex%20%22%20Patrick%20Lewis&f=false"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "OpenCV",
			url: "http://opencv.org"
		}
	],
	tags: [
		"opencv",
		"dj",
		"vj",
		"cv",
		"turntables",
		"color tracking",
		"openframeworks"
	]
},
{
	id: "diamonds-and-code",
	title: "Diamonds And Code",
	summary: "\"diamondsAndCode” is a Open Source Augmented Reality performative teaching game for turntable practice and instrumentation, with the focus on the techniques...",
	category: "projects",
	thumb: "myIcons/navTopic/DiamondsAndCodeTopic_0.jpg",
	banner: "myIcons/navRelated/DiamondsAndCodeRelated_0.jpg",
	year: 2010,
	video: "vimeo:11468346",
	text: [
		"\"diamondsAndCode” is a Open Source Augmented Reality performative teaching game for turntable practice and instrumentation, with the focus on the techniques of scratching, beat juggling and User-generated calibration/content. The game uses the exact position of the needle in the record as the quantifiable data that advances score and the win state.",
		"\"diamondsAndCode” biphasic system of a question then answer is traditional to music competition and maintained by DJ culture. This is audience independent, Procedural content generation iterated and does not require a pre-subscribed ability by player. It is familiar to the intended community and recognizable by beginners.",
		"OneZero: Parsons The New School for Design MFADT Symposium 2010.",
		"thanks to Ms. Pinky, openFrameworks, ARToolkit plus, Max, Blender and Dr. Gottfried Ungerboeck"
	],
	links: [
		{
			label: "OneZero: Parsons The New School for Design MFADT Symposium 2010",
			url: "http://amt.parsons.edu/mfadt/thesis/2010/press/parsons-mfa-design-and-technology-thesis-symposium/"
		},
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "ARToolkit plus",
			url: "http://handheldar.icg.tugraz.at/artoolkitplus.php"
		},
		{
			label: "Max",
			url: "https://cycling74.com"
		},
		{
			label: "Blender",
			url: "https://www.blender.org"
		},
		{
			label: "DiamondsAndCode",
			url: "assets/text/DiamondsAndCode/dAC_CulminatingPaper_leeMeredith2010.pdf"
		},
		{
			label: "Game Book",
			url: "assets/text/DiamondsAndCode/Game_Book.pdf"
		}
	],
	tags: [
		"dj",
		"vj",
		"cv",
		"augmented reality",
		"games",
		"written",
		"parsons",
		"juggling",
		"openframeworks",
		"max",
		"paper"
	]
},
{
	id: "handmaid-film-1",
	title: "Handmaid Film 1",
	category: "projects",
	thumb: "myIcons/navTopic/HandmaidFilmTopic_1.jpg",
	banner: "myIcons/navRelated/HandmaidFilmRelated_1.jpg",
	year: 2010,
	video: "vimeo:10462942",
	tags: [
		"handmaid",
		"hand-painted",
		"35mm",
		"paint",
		"2d",
		"film"
	]
},
{
	id: "eyewriter-testing",
	title: "Eyewriter Testing",
	summary: "Shows the best result with minimal glint from this IR LED (no dimmable LED used).",
	category: "projects",
	thumb: "myIcons/navTopic/EyewriterTestingTopic_0.jpg",
	banner: "myIcons/navRelated/EyewriterTestingRelated_0.jpg",
	year: 2010,
	video: "vimeo:10393723",
	text: [
		"Shows the best result with minimal glint from this IR LED (no dimmable LED used). Eyewriter"
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "FAT",
			url: "http://fffff.at/about/"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"arduino",
		"pcom",
		"openframeworks"
	]
},
{
	id: "handmaid-film-0",
	title: "Handmaid Film 0",
	category: "projects",
	thumb: "myIcons/navTopic/HandmaidFilmTopic_0.jpg",
	banner: "myIcons/navRelated/HandmaidFilmRelated_0.jpg",
	year: 2010,
	video: "vimeo:10309587",
	tags: [
		"handmaid",
		"hand-painted",
		"35mm",
		"paint",
		"2d",
		"film"
	]
},
{
	id: "fuel-anxiety",
	title: "Fuel Anxiety",
	summary: "35mm lightbox image \"Planned Car Crash\"",
	category: "projects",
	thumb: "myIcons/navTopic/FuelAnxietyTopic_0.jpg",
	banner: "myIcons/navRelated/FuelAnxietyRelated_0.jpg",
	year: 2002,
	text: [
		"35mm lightbox image \"Planned Car Crash\"",
		"35mm lightbox image \"Planned Explosion\""
	],
	images: [
		{
			src: "35mm/fuel_anxiety_35mm_lightbox_image_00.jpg",
			alt: "Fuel Anxiety, image 1"
		},
		{
			src: "35mm/fuel_anxiety_35mm_lightbox_image_01.jpg",
			alt: "Fuel Anxiety, image 2"
		}
	],
	tags: [
		"35mm",
		"2d",
		"film"
	]
},
{
	id: "color-tracking-the-traditional-dj-dot",
	title: "Color tracking the traditional DJ dot",
	summary: "Big fat cursor in the middle of the graphics.",
	category: "projects",
	thumb: "myIcons/navTopic/traditionalDotTopic_0.jpg",
	banner: "myIcons/navRelated/traditionalDotRelated_0.jpg",
	year: 2009,
	video: "vimeo:8344097",
	text: [
		"Big fat cursor in the middle of the graphics. Made Fresh and only five cents."
	],
	links: [
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "OpenCV",
			url: "http://opencv.org"
		}
	],
	tags: [
		"set pix",
		"turntables",
		"color tracking",
		"dj",
		"openframeworks"
	]
},
{
	id: "homework2",
	title: "HomeWork2",
	summary: "set Pix HomeWork 2 - Drawing Tool",
	category: "projects",
	thumb: "myIcons/navTopic/HomeWork2Topic_0.jpg",
	banner: "myIcons/navRelated/HomeWork2Related_0.jpg",
	year: 2009,
	video: "vimeo:7108493",
	text: [
		"set Pix HomeWork 2 - Drawing Tool"
	],
	tags: [
		"set pix"
	]
},
{
	id: "third-rail-power",
	title: "Third Rail Power",
	summary: "VJ / Marian Anderson / Stanley Milgram / Abraham Lincoln memorial",
	category: "projects",
	thumb: "myIcons/navTopic/ThirdRailPowerTopic_0.jpg",
	banner: "myIcons/navRelated/ThirdRailPowerRelated_0.jpg",
	year: 2009,
	video: "vimeo:6434667",
	text: [
		"VJ / Marian Anderson / Stanley Milgram / Abraham Lincoln memorial"
	],
	tags: [
		"vj",
		"dj",
		"mixed video"
	]
},
{
	id: "diamonds-and-code-of-art",
	title: "Diamonds And Code OF / ART",
	summary: "Thanks to Dr.",
	category: "projects",
	thumb: "myIcons/navTopic/DiamondsCodeARTTopic_0.jpg",
	banner: "myIcons/navRelated/DiamondsCodeARTRelated_0.jpg",
	year: 2009,
	video: "vimeo:6350131",
	text: [
		"Thanks to Dr. Gottfried Ungerboeck",
		"Ms. Pinky, openFrameworks, ARToolkit plus, Blender"
	],
	links: [
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "Ms. Pinky",
			url: "http://mspinky.com"
		},
		{
			label: "ARToolkit plus",
			url: "http://handheldar.icg.tugraz.at/artoolkitplus.php"
		},
		{
			label: "Max",
			url: "https://cycling74.com"
		},
		{
			label: "Blender",
			url: "https://www.blender.org"
		}
	],
	tags: [
		"dj",
		"vj",
		"cv",
		"diamonds and code",
		"juggling",
		"openframeworks",
		"max"
	]
},
{
	id: "electroacoustic-bounce-juggling-interface",
	title: "Electroacoustic bounce juggling interface",
	summary: "Enormous amount of effort has been put into Circus having the technologically avant-garde at their disposal.",
	category: "projects",
	thumb: "myIcons/navTopic/EleBouncejugglingTopic_0.jpg",
	banner: "myIcons/navRelated/EleBouncejugglingRelated_0.jpg",
	year: 2009,
	video: "vimeo:4739149",
	text: [
		"Enormous amount of effort has been put into Circus having the technologically avant-garde at their disposal. For all issues to the distribution methods that allowed rural communities accessibility to the body numbing tight wire events created by acrobats. Opening their minds to science by displaying what was once exotic animals and the utilization of math to create larger and safer spectacles. This explores the need to continue this within the modern circus by using projection and digital statistical imagery with juggling. The Bytes bouncer is a Electro acoustic board that receives the sound by bounce juggling against it. The sound is represented through a wood interface relating events that are abstracted into a digital equivalent. openFrameworks / Pic Microchip / ofxOsc / Max"
	],
	links: [
		{
			label: "openFrameworks",
			url: "http://openframeworks.cc"
		},
		{
			label: "ofxOsc",
			url: "http://damianstewart.com/ofxosc/"
		},
		{
			label: "Microchip",
			url: "http://www.microchip.com/design-centers/microcontrollers"
		},
		{
			label: "Max",
			url: "https://cycling74.com"
		}
	],
	tags: [
		"juggling",
		"microchip",
		"bounce juggling",
		"openframeworks",
		"max"
	]
},
{
	id: "genocide-the-interface",
	title: "Genocide The Interface",
	category: "projects",
	thumb: "myIcons/navTopic/GenocideInterfaceTopic_0.jpg",
	banner: "myIcons/navRelated/GenocideInterfaceRelated_0.jpg",
	year: 2008,
	video: "vimeo:2622889",
	tags: [
		"video portrait",
		"video",
		"vj"
	]
},
{
	id: "fps30-a10-00",
	title: "fps30_A10_00",
	summary: "Alternating LED with VSYNC fps30_A10_00 ps3",
	category: "projects",
	thumb: "myIcons/navTopic/fps30_A10_00Topic_0.jpg",
	banner: "myIcons/navRelated/fps30_A10_00Related_0.jpg",
	year: 2010,
	video: "youtube:fPIXUFjVk9U",
	text: [
		"Alternating LED with VSYNC fps30_A10_00 ps3"
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"openframeworks",
		"arduino"
	]
},
{
	id: "fps60-a10-00",
	title: "fps60_A10_00",
	summary: "Alternating LED with VSYNC fps60_A10_00 ps3",
	category: "projects",
	thumb: "myIcons/navTopic/fps60_A10_00Topic_0.jpg",
	banner: "myIcons/navRelated/fps60_A10_00Related_0.jpg",
	year: 2010,
	video: "youtube:SllbypRhamI",
	text: [
		"Alternating LED with VSYNC fps60_A10_00 ps3"
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"openframeworks",
		"arduino"
	]
},
{
	id: "fps120-a10-00",
	title: "fps120_A10_00",
	summary: "Alternating LED with VSYNC fps120_A10_00 ps3",
	category: "projects",
	thumb: "myIcons/navTopic/fps120_A10_00Topic_0.jpg",
	banner: "myIcons/navRelated/fps120_A10_00Related_0.jpg",
	year: 2010,
	video: "youtube:Lxxj2NAjBtw",
	text: [
		"Alternating LED with VSYNC fps120_A10_00 ps3"
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"openframeworks",
		"arduino"
	]
},
{
	id: "eyewriter",
	title: "Eyewriter",
	summary: "PS3 EyeCamera VSYNC test with Arduino / Eyewriter",
	category: "projects",
	thumb: "myIcons/navTopic/PS3EyeCameraTopic_0.jpg",
	banner: "myIcons/navRelated/PS3EyeCameraRelated_0.jpg",
	year: 2010,
	video: "youtube:OV1NlM9EWcs",
	text: [
		"PS3 EyeCamera VSYNC test with Arduino / Eyewriter"
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"openframeworks",
		"arduino"
	]
},
{
	id: "eyewriter-testing-of-glint",
	title: "Eyewriter, testing of glint",
	summary: "For Eyewriter, we want to track the glint in relation to pupil without the shadow from eyelashes.",
	category: "projects",
	thumb: "myIcons/navTopic/EyewriterTestingGlintTopic_0.jpg",
	banner: "myIcons/navRelated/EyewriterTestingGlintRelated_0.jpg",
	year: 2010,
	video: "youtube:UVCkplrKecQ",
	text: [
		"For Eyewriter, we want to track the glint in relation to pupil without the shadow from eyelashes. Here is initial shot of IR glint on pupil."
	],
	links: [
		{
			label: "Eyewriter",
			url: "http://www.eyewriter.org"
		},
		{
			label: "Arduino",
			url: "http://www.arduino.cc"
		}
	],
	tags: [
		"eyewriter",
		"ir",
		"tracking",
		"openframeworks",
		"arduino"
	]
},
{
	id: "coloring-book-averging",
	title: "Coloring Book / Averging",
	category: "projects",
	thumb: "myIcons/navTopic/ColoringBookTopic_0.jpg",
	banner: "myIcons/navRelated/ColoringBookRelated_0.jpg",
	year: 2009,
	images: [
		{
			src: "setPix/polyHWMTP_00.png",
			alt: "Coloring Book / Averging, image 1"
		},
		{
			src: "setPix/polyHW3_00.png",
			alt: "Coloring Book / Averging, image 2"
		}
	],
	tags: [
		"coloring book",
		"2d"
	]
},
{
	id: "algorithmic-images",
	title: "Algorithmic Images",
	category: "projects",
	thumb: "myIcons/navTopic/ProcessingTopic_0.jpg",
	banner: "myIcons/navRelated/ProcessingRelated_0.jpg",
	year: 2009,
	images: [
		{
			src: "Processing/sPWeb_01.jpg",
			alt: "Algorithmic Images, image 1"
		},
		{
			src: "Processing/sPWeb_02.jpg",
			alt: "Algorithmic Images, image 2"
		},
		{
			src: "Processing/sPWeb_03.jpg",
			alt: "Algorithmic Images, image 3"
		},
		{
			src: "Processing/sPWeb_04.jpg",
			alt: "Algorithmic Images, image 4"
		},
		{
			src: "Processing/sPWeb_05.jpg",
			alt: "Algorithmic Images, image 5"
		},
		{
			src: "Processing/sPWeb_06.jpg",
			alt: "Algorithmic Images, image 6"
		}
	],
	tags: [
		"coloring book",
		"2d",
		"processing"
	]
},
{
	id: "clown-1",
	title: "Clown 1",
	summary: "I wrote Clown 1 the play to be a theatrical game in where the character of Clown 1 decides which of the characters / hostage continue to act on stage.",
	category: "projects",
	thumb: "myIcons/navTopic/clown1Topic_0.jpg",
	banner: "myIcons/navRelated/clown1Related_0.jpg",
	year: 2001,
	text: [
		"I wrote Clown 1 the play to be a theatrical game in where the character of Clown 1 decides which of the characters / hostage continue to act on stage.",
		"Turn on the light. (The lights immediately flip on.) I am not here. I am not talking. I am not talking to you. I am not looking at you. You are not with me. I don't know where I am but this is not me. This is someone else. None of this is happening to me. I am not in this. You can't see me. So what does this body look like? What color is there skin? Who's attracted to you? Who are you attracted to? Is this body short, tall? Do you like yourself? What color are their eyes? Does it bother you to see yourself in the mirror? Can we get some more light on the actor? (A spotlight is provided.) Turn very slowly. Now I want you to answer. How old are you. (The actor answers.) What is your favorite season? (Answer.) Are your parents together? (Answer.) Do you have any siblings? (Answer.) Are you in love with someone? (Answer.) Are you nervous? (Answer.) Tense your body. You can relax your body after I count to three. One, two. (Silence.) Three. How is your stomach? You should have a pack of cigarettes. Smoke two of them. By now you should be getting a gun from somewhere. (In sequence with the lines.) The actor pulls out a gun. Tells the audience that she or he will be pointing the gun at them. I'm going to point the gun at you. Nobody fuckin move. Yell at the audience again. I said shut the fuck up. Make an example. Download Clown 1"
	],
	images: [
		{
			src: "clown_1/clown1_Pos_00.jpg",
			alt: "Clown 1, image 1"
		},
		{
			src: "clown_1/clown1_02.jpg",
			alt: "Clown 1, image 2"
		},
		{
			src: "clown_1/clown1_03.jpg",
			alt: "Clown 1, image 3"
		},
		{
			src: "clown_1/clown1_04.jpg",
			alt: "Clown 1, image 4"
		},
		{
			src: "clown_1/clown1_05.jpg",
			alt: "Clown 1, image 5"
		},
		{
			src: "clown_1/clown1_06.jpg",
			alt: "Clown 1, image 6"
		},
		{
			src: "clown_1/clown1_07.jpg",
			alt: "Clown 1, image 7"
		}
	],
	links: [
		{
			label: "Clown 1",
			url: "assets/text/Writing/play/Clown1.pdf"
		}
	],
	tags: [
		"clown 1",
		"plays",
		"game",
		"written"
	]
},
{
	id: "dj-the-phantom-of-the-opera",
	title: "DJ The Phantom Of The Opera",
	category: "projects",
	thumb: "myIcons/navTopic/PhantomTopic_0.jpg",
	banner: "myIcons/navRelated/PhantomRelated_0.jpg",
	year: 1999,
	images: [
		{
			src: "DJ/DJ_ThePhantomOfTheOpera/DJ_ThePhantomOfTheOpera.jpg",
			alt: "DJ The Phantom Of The Opera, image 1"
		}
	],
	tags: [
		"phantom of the opera",
		"theater",
		"dj",
		"vj",
		"cv"
	]
},
{
	id: "attrition",
	title: "Attrition",
	summary: "Mark had watched the children being dropped off and picked up for the last week and a half and only stopped watching three days before the night letter had...",
	category: "projects",
	thumb: "myIcons/navTopic/AttritionTopic_0.jpg",
	banner: "myIcons/navRelated/AttritionRelated_0.jpg",
	year: 2016,
	text: [
		"Mark had watched the children being dropped off and picked up for the last week and a half and only stopped watching three days before the night letter had arrived from the school board."
	],
	links: [
		{
			label: "The Bell Rang",
			url: "assets/text/Writing/prose/attrition/the_bell_rang.pdf"
		}
	],
	tags: [
		"attrition",
		"prose",
		"written"
	]
},
{
	id: "sort",
	title: "Sort",
	summary: "Silence.",
	category: "projects",
	thumb: "myIcons/navTopic/ALPHABETHANDSTopic_0.jpg",
	banner: "myIcons/navRelated/ALPHABETHANDSRelated_0.jpg",
	year: 2016,
	text: [
		"Silence. A planet floating in water and encased in plastic on the end of a key chain, rolls like a broken compass playing tug of war against a tag of paper with blue ink illustrations of hands, corresponding letters and a simple statement expressing the gratitude donations to the deaf."
	],
	links: [
		{
			label: "ALPHABET HANDS",
			url: "assets/text/Writing/prose/sort/ALPHABET_HANDS.pdf"
		}
	],
	tags: [
		"alphabet hands",
		"prose",
		"sort",
		"written"
	]
},
{
	id: "monster-mayhem",
	title: "Monster Mayhem",
	summary: "A hand-drawn horror coloring book: 25 original monsters on single-sided pages.",
	category: "projects",
	thumb: "monster-mayhem/monsterMayhem_Cover.png",
	text: [
		"Get ready to see twisted monsters of all shapes and sizes oozing, mangled, and piercing! This hand drawn coloring book has a little something for everyone whether that be gore fanatics or body horror enthusiasts. It also contains a variety of approachable creepy characters for those who are trying to get over their fears through exposure therapy. A great gift for Halloween, Christmas, or any occasion. These 25 shocking original art pieces are conveniently placed on single sided pages to avoid bleed. There are also no backgrounds so that you can either focus only on the bone-chilling monster before you or create your own nightmarish scene. What are you waiting for? A tap on your window or a creak in the hall? Jump into the dark head first with this horrific coloring book!"
	],
	images: [
		{
			src: "monster-mayhem/monsterMayhem_Cover.png",
			alt: "Monster Mayhem book cover"
		}
	],
	links: [
		{
			label: "Buy on Amazon",
			url: "https://www.amazon.com/dp/B0DFWJDZVD"
		}
	],
	tags: [
		"coloring book",
		"book",
		"drawing",
		"2d"
	]
}
];
