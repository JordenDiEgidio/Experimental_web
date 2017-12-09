// console.log(storeImgSource);
//               imageUri: `https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg`

export default {
  read: storeImgSource => {
    // const url = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBc2v6Bg6wnZJSxMGI3_rdJUubwu34HBB8`;
    const url = ``;

    const method = `POST`;
    const data =

    //               imageUri: `https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg`

    {
      requests: [
        {
          image: {
            content: storeImgSource,
          },
          features: [
            {
              type: `FACE_DETECTION`,

            }
          ]
        }
      ]
    }
    ;
    const body = JSON.stringify(data);
    return fetch(url, {method, body, "Content-Type": `application/json`})
      .then(r => r.json());

  }

};
