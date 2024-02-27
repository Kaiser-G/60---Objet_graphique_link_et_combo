class Combo {
  id_zone = "";
  id_select = "";
  class_select = "";
  data = "";

  //methode generer
  generer() {
    if (this.id_zone != "") {
      let code_generer = document.createElement("select");
      document.createElement("option").appendChild(code_generer);

      if (this.id_select != "") {
        code_generer.id = this.id_select;
      }
      if (this.class_select != "") {
        code_generer.className = this.class_select;
      }
      code_generer.href = this.url;
      code_generer.target = this.target;
      code_generer.innerText = this.texte_visible;
      if (!this.append) {
        document.getElementById(this.id_zone).innerHTML = "";
      }
      document.getElementById(this.id_zone).appendChild(code_generer);
    } else {
      throw new Error(
        "Pour générer un Link, il faut préciser la proprieté id_zone"
      );
    }
  }
}
