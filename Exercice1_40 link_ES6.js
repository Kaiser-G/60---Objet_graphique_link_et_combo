class Link {
  // Id_zone = "nc";
  // Id_link = "nc";
  // Class_link = "nc";
  // Url = "nc";
  // Texte_visible = "nc";
  // Target = "nc";
  // Append = "nc";

  // constructor(
  //   id_zone = "nc",
  //   id_link = "nc",
  //   class_link = "nc",
  //   url = "nc",
  //   texte_visible = "nc",
  //   target = "nc",
  //   append = "nc"
  // ) {
  //   this.Id_zone = id_zone;
  //   this.Id_link = id_link;
  //   this.Class_link = class_link;
  //   this.Url = url;
  //   this.Texte_visible = texte_visible;
  //   this.Target = target;
  //   this.Append = append;
  // }

  id_zone = "";
  id_link = "";
  class_link = "";
  url = "";
  texte_visible = "";
  target = "";
  append = false;

  generer() {
    if (this.id_zone != "") {
      let code_generer = document.createAttribute("a");
      if (this.id_link != "") {
        code_generer.id = this.Id_link;
      }
      if (this.class_link != "") {
        code_generer.className = this.class_link;
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
