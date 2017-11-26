

export default {
  read: () => {
    const url = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBc2v6Bg6wnZJSxMGI3_rdJUubwu34HBB8`;
    const method = `POST`;
    const data =
    {
      requests: [
        {
          image: {
            source: {
              imageUri: `https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg`
            }
          },
          features: [
            {
              type: `LABEL_DETECTION`
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
