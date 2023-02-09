function Card() {
  this.attack = Math.floor(Math.random() * 30) + 1;
  this.def = Math.floor(Math.random() * 30) + 1;
  this.average = (this.attack + this.def) / 2;
  this.rarity =
    this.average >= 25 ? "UltraRare" : this.average < 25 && this.average >= 15 ? "Rare" : "Normal";
  this.img =
    this.average >= 25
      ? `ultra${Math.floor(Math.random() * 5) + 1}`
      : `card${Math.floor(Math.random() * 8) + 1}`;
  // 울레 확률: 6/30, 레어확률: 10/30 , 노말확률: 14/30
}
function RareCard() {
  this.attack = Math.floor(Math.random() * 10) + 15;
  this.def = Math.floor(Math.random() * 10) + 15;
  this.average = (this.attack + this.def) / 2;
  this.rarity = "Rare";
  this.img = `card${Math.floor(Math.random() * 8) + 1}`;
}
function UltraRareCard() {
  this.attack = Math.floor(Math.random() * 6) + 25;
  this.def = Math.floor(Math.random() * 6) + 25;
  this.average = (this.attack + this.def) / 2;
  this.rarity = "UltraRare";
  this.img = `ultra${Math.floor(Math.random() * 5) + 1}`;
}
module.exports = { Card, RareCard, UltraRareCard };
