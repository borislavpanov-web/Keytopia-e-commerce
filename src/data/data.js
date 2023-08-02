function generateImportPath(name, imageType) {
  return `./src/assets/${name}.${imageType}`;
}

const products = [
  {
    id: 1,
    name: "Ducky Yellow",
    price: 300,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("Ducky Yellow", "jpg"),
    description:
      "• Featuring Ducky's all new QUACK Mechanics design philosophy\n" +
      "• Dual layer Hot-swap PCB w/ exclusive Kailh yellow hotswap sockets\n" +
      "• Equipped with dual-layer high-grade silicone and EVA foam sound dampeners\n" +
      "• Per-key programmable RGB\n" +
      "• Thick PBT Double-shot seamless keycaps\n" +
      "• 3 level adjustable feet and Detachable Braided USB Type-C cable\n" +
      "• Improved PCB design, V2 stabilizers, and remapped Macro Layout",
  },
  {
    id: 2,
    name: "DuckyOne 3",
    price: 250,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("DuckyOne 3", "jpg"),
    description:
      "• Featuring Ducky's all new QUACK Mechanics design philosophy\n" +
      "• Dual layer Hot-swap PCB w/ exclusive Kailh yellow hotswap sockets\n" +
      "• Equipped with dual-layer high-grade silicone and EVA foam sound dampeners\n" +
      "• Thick PBT Double-shot seamless keycaps\n" +
      "• 3 level adjustable feet and Detachable Braided USB Type-C cable\n" +
      "• Improved PCB design, V2 stabilizers, and remapped Macro Layout",
  },
  {
    id: 3,
    name: "HHKB",
    price: 350,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("HHKB", "jpg"),
    description:
      "• Dip switches for customizing layout\n" +
      "• 3-stage height adjustable feet\n" +
      "• USB-C connectivity (cable not included)\n" +
      "• PBT spacebar\n" +
      "• Connect up to 4 devices via Bluetooth; PC, tablet, smartphone\n" +
      "• Uses 2 AA batteries (included)",
  },
  {
    id: 4,
    name: "Varmilo",
    price: 150,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("Varmilo", "jpg"),
    description:
      "• Varmilo x MK x Ducky limited edition MIYA Pro collaboration\n" +
      "• Supports Bluetooth connectivity on up to 3 devices\n" +
      "• PBT Dye Sub all over keycap print allows for incredibly unique dark-on-dark modifiers and beautiful colorway\n" +
      "• 65% layout with arrow keys\n" +
      "• Detailed frame graphics\n" +
      "• Bonus Limited Edition Flare Star keycap keychain\n" +
      "• Bonus Flare Star blue on white spacebar + Bonus Flare Star Escape key + additional bonus caps for wireless mode indicator LEDs\n" +
      "• USB-C cable included to charge and connect",
  },
  {
    id: 5,
    name: "Vortex",
    price: 200,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("Vortex", "jpg"),
    description: ` • Black aluminum case
 • White LED backlight
 • 60% form factor`,
  },
  {
    id: 6,
    name: "Vortex NewRace",
    price: 230,
    category: "Keyboard",
    imageType: "jpg",
    image: generateImportPath("Vortex NewRace", "jpg"),
    description:
      "• Compact ANSI 60% Layout\n" +
      "• Updated USB-C Port\n" +
      "• White aluminum case\n",
  },
  {
    id: 7,
    name: "Cherry MX Black",
    price: 3.99,
    category: "Switches",
    imageType: "png",
    description:
      "A moderately stiff linear keyswi tch. The resistance ensures an accurate key press ideal for some gamers. Its linear feel, combined with a slightly higher spring force, has made this keyswitch popular in industrial and point-of-sale environments.",
    image: generateImportPath("Cherry MX Black", "png"),
  },
  {
    id: 8,
    name: "Cherry MX Blue",
    price: 3.99,
    category: "Switches",
    imageType: "png",
    description:
      "Excellent for typing and ideal for users who like to hear and feel a click when they press a key. These tactile keyswitches help ensure accurate data entry.",
    image: generateImportPath("Cherry MX Blue", "png"),
  },
  {
    id: 9,
    name: "Cherry MX Brown",
    price: 3.99,
    category: "Switches",
    imageType: "png",
    description:
      "A lighter keyswitch with subtle tactile and audible feedback. A great hybrid for typist gamers.",
    image: generateImportPath("Cherry MX Brown", "png"),
  },
  {
    id: 10,
    name: "Cherry MX Red",
    price: 3.99,
    category: "Switches",
    imageType: "png",
    description:
      "A light, linear keyswitch that is nice for typing and great for gamers looking for something lighter than Cherry Blacks. Cherry MX Red’s linear feel combined with minimal spring force produces fast response times and smooth operation.",
    image: generateImportPath("Cherry MX Red", "png"),
  },
  {
    id: 11,
    name: "Cherry MX Green",
    price: 3.99,
    category: "Switches",
    imageType: "png",
    description:
      "The Cherry MX Green is a heavier version of its MX Blue counterpart. It features the same actuating characteristics, like an audible and tactile click, but the actuation force is higher at 80 centinewtons. A Green MX switch is sometimes used for the spacebar in a Blue MX keyboard.",
    image: generateImportPath("Cherry MX Green", "png"),
  },
  {
    id: 12,
    name: "Cherry MX Clear",
    price: 3.99,
    category: "Switches",
    description:
      "Often referred to as 'stiffer' browns. As a tactile switch without click and acoustic feedback, the CHERRY MX Clear is the sister model of the MX Brown. With an actuation force of 65 centinewton, the required force is slightly higher. The Cherry MX Clear is sometimes used as the space bar for keyboards with MX Brown switches.",
    image: generateImportPath("Cherry MX Clear", "png"),
  },
];

export default products;
