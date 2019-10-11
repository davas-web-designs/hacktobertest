    // Your code will go here
      // open up your console - if everything loaded properly you should see 0.3.1
      console.log('ml5 version:', ml5.version);

      let mobilenet;

      let puffin;

      function modelReady(){
        console.log('Model is ready!!');
        //here we want to predict what the image was, can you help me write that code? hint, use the ml5 documentation
        
      }

      function gotResults(error, results){
          if(error) {
            console.error(error)
          }
          else {
            //feel free to explore the results yourself:
          }
      }

      function imageReady(){
        image(puffin, 0, 0, width, height);
      }

      function setup(){
        createCanvas(640, 480);
        puffin = createImg('images/puffin.jpg', imageReady);
        puffin.hide();
        background(0);
        image(puffin, 0, 0);
        //here we need to give the variable mobilenet a value , so that it contains an imageClassifier, can you find how to do that in the ml5 documentation page?
      }
