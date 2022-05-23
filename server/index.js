const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json(), cors());
app.post('/login', (req, res)=>{
  const token = jwt.sign({user: 'user name', admin: true}, 'ITVDN', {expiresIn: '5d'});
  try{
    if(!(req.body.email === 'test@gmail.com' && req.body.password === '123456')){
      throw new Error('this user not found');
    }
    res.status(200).send({accessToken: token});
  }
  catch(e){
    res.status(400).send('User not found');
    console.log(e);
  }
});
app.get('/articles', function(req, res){
  res.send(
    [
      {
        id: 1,
        title: "Test",
        destination: "Destination Europe",
        autor: "Added by John Williams Doe",
        postTime: "January 01, 2021",
        image:
          "https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
      },
      {
        id: 2,
        title: "Test2",
        destination: "Destination Europe",
        autor: "Added by John Williams Doe2",
        postTime: "January 01, 2021",
        image:
          "https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
      },
      {
        id: 3,
        title: "Test3",
        destination: "Destination Europe",
        autor: "Added by John Williams Doe 3",
        postTime: "January 01, 2020",
        image:
          "https://indonesiatatler.com/images/i/story-20160915143233-IMGDinoWorld_resized_750x500.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
      },
      {
        id: 4,
        title: "Test4",
        destination: "Destination Europe",
        autor: "Added by John Williams Doe 3",
        postTime: "January 01, 2019",
        image:
          "https://indonesiatatler.com/images/i/story-20160915143233-IMGDinoWorld_resized_750x500.jpg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
      }
    ]
  );
});
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`app listening port ${port}`);
});
