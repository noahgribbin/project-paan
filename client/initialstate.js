updateArmorInput(e){E
  var name = e.target.name;
  var E = e.target.value;
  var fields = ['armorName'];
  this.setState({[name]:E})
  .then(() =>{
    this.errorCheck(fields)
  })
  .then(() =>{
    this.onChange(E)
  })
  console.log(this.state);
}
