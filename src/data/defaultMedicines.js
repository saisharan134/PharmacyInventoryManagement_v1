import { generateRandomExpiry } from "../utils/expiryUtils";

const defaultMedicines = [
{ name:"Paracetamol", price:20, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/paracetomal.jpg" },
{ name:"Ibuprofen", price:35, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/Ibuprofen.jpg" },
{ name:"Azithromycin", price:150, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/Azithromycin.jpg" },
{ name:"Amoxicillin", price:120, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/Amoxicillin.jpg" },
{ name:"Dolo 650", price:30, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/dolo650.jpg" },
{ name:"Crocin", price:25, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/crocin.jpg" },
{ name:"Aspirin", price:40, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/aspirin.jpg" },
{ name:"Metformin", price:85, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/metformin.jpg" },
{ name:"Pantoprazole", price:90, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/pantoprazole.jpg" },
{ name:"Omeprazole", price:95, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/omeprazole.jpg" },

{ name:"Cetirizine", price:50, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/cetirizine.jpg" },
{ name:"Levocetirizine", price:65, qty:100, category:"Tablet", expiry:generateRandomExpiry(), img:"/medicines/levocetirizine.jpg" },
{ name:"Zinc Tablets", price:70, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/zinctablets.jpg" },
{ name:"Vitamin C", price:60, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/vitaminc.jpg" },
{ name:"Vitamin D3", price:120, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/vitamind3.jpg" },
{ name:"Calcium Tablets", price:140, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/calciumtablets.jpg" },
{ name:"Iron Tablets", price:110, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/irontablets.jpg" },
{ name:"Multivitamin", price:180, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/multivitamin.jpg" },
{ name:"ORS Powder", price:25, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/orspowder.jpg" },
{ name:"Protein Powder", price:2350, qty:100, category:"Supplement", expiry:generateRandomExpiry(), img:"/medicines/proteinpowder.jpg" },

{ name:"Cough Syrup", price:75, qty:100, category:"Syrup", expiry:generateRandomExpiry(), img:"/medicines/coughsyrup.jpg" },
{ name:"Benadryl Syrup", price:110, qty:100, category:"Syrup", expiry:generateRandomExpiry(), img:"/medicines/benadrylsyrup.jpg" },
{ name:"Ascoril Syrup", price:130, qty:100, category:"Syrup", expiry:generateRandomExpiry(), img:"/medicines/ascorilsyrup.jpg" },
{ name:"Digestive Syrup", price:95, qty:100, category:"Syrup", expiry:generateRandomExpiry(), img:"/medicines/digestivesyrup.jpg" },
{ name:"Lactulose Syrup", price:180, qty:100, category:"Syrup", expiry:generateRandomExpiry(), img:"/medicines/lactulosesyrup.jpg" },

{ name:"Insulin Injection", price:500, qty:100, category:"Injection", expiry:generateRandomExpiry(), img:"/medicines/insulininjection.jpg" },
{ name:"Tetanus Injection", price:250, qty:100, category:"Injection", expiry:generateRandomExpiry(), img:"/medicines/tetanusinjection.jpg" },
{ name:"Vitamin B12 Injection", price:350, qty:100, category:"Injection", expiry:generateRandomExpiry(), img:"/medicines/vitaminb12injection.jpg" },
{ name:"Rabies Injection", price:700, qty:100, category:"Injection", expiry:generateRandomExpiry(), img:"/medicines/rabiesinjection.jpg" },
{ name:"Diclofenac Injection", price:180, qty:100, category:"Injection", expiry:generateRandomExpiry(), img:"/medicines/diclofenacinjection.jpg" },

{ name:"Dettol Liquid", price:90, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/dettolliquid.jpg" },
{ name:"Savlon Liquid", price:95, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/savlonliquid.jpg" },
{ name:"Hand Sanitizer", price:120, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/handsanitizer.jpg" },
{ name:"Digital Thermometer", price:250, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/digitalthermometer.jpg" },
{ name:"BP Monitor", price:1800, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/bpmonitor.jpg" },

{ name:"Nebulizer", price:2200, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/nebulizer.jpg" },
{ name:"Glucometer", price:1200, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/glucometer.jpg" },
{ name:"Pulse Oximeter", price:950, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/pulseoximeter.jpg" },
{ name:"Face Mask", price:10, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/facemask.jpg" },
{ name:"Surgical Gloves", price:50, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/surgicalgloves.jpg" },

{ name:"Bandage Roll", price:35, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/bandageroll.jpg" },
{ name:"Antiseptic Cream", price:85, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/antisepticcream.jpg" },
{ name:"Burn Ointment", price:140, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/burnointment.jpg" },
{ name:"Pain Relief Gel", price:160, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/painreliefgel.jpg" },
{ name:"Eye Drops", price:110, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/eyedrops.jpg" },

{ name:"Ear Drops", price:100, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/eardrops.jpg" },
{ name:"Nasal Spray", price:190, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/nasalspray.jpg" },
{ name:"Hydrogen Peroxide", price:75, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/hydrogenperoxide.jpg" },
{ name:"Medical Cotton", price:40, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/medicalcotton.jpg" },
{ name:"Adhesive Tape", price:55, qty:100, category:"Device", expiry:generateRandomExpiry(), img:"/medicines/adhesivetape.jpg" }
];

export default defaultMedicines;