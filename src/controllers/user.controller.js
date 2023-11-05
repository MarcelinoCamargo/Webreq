const soma = (req,res)=>{
    const soma = 20 + 2;
  
  res.send({soma:soma});
};

module.exports = {soma};