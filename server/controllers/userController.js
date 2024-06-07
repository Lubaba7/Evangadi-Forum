

//db connection

const dbconnection =require("../db/dbConfige")


  async function register(req, res){
 //res.send("register")

 const {username, firstname, lastname, email, password} = req.body;


if (!email || !password || !firstname || !lastname|| !username){
    return res.status (400).json({msg:"please provide all requied information"})
}

try{
  const [user]= await dbconnection.query("select username,userid from users where username = ?", [username,email])
if (user.length > 0){
  return res.status(400).json({msg: "user already existed"})
}

  await dbconnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES(?,?,?,?,?)",[username,firstname, lastname,email,password]
  );
return res.status(200).json({
  message: "user successfully created"
})
}

catch (error){
  console.log(error.message, "IS this the error")
return res.status(500).json({msg: "somthing went wrong, try again later!"})

}
  }

async function login(req,res){
 res, send("login")
}


async function checkuser(req,res){
res,send("checkuser")
}



module.exports={register,login,checkuser}