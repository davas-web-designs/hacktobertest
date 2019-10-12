// Your code will go here
      // open up your console - if everything loaded properly you should see 0.3.1
      console.log('ml5 version:', ml5.version);

      let mobilenet;

      let video;

      let label = '';

      function modelReady(){
        console.log('Model is ready!!');
        //here we want to predict what the image was, can you help me write that code? hint, use the ml5 documentation

        //in exercise two, we need to to the same as in 1 but with a contiuous loop, this is pretty simple to do, hint on how: https://github.com/ml5js/ml5-examples/blob/development/p5js/ImageClassification/ImageClassification_Video/sketch.js

      }

      function gotResults(error, results){
          if(error) {
            console.error(error)
          }
          else {
            //feel free to explore the results yourself:

            //dont console.log in the second exercise:
            label = results[0].className;
            //console.log(results)
            //call the predict function recursively...
          }
      }

      function setup(){
        createCanvas(640, 550);
        //video = ? give the variable video a value so that it captures whats on the webcam, hint: https://p5js.org/examples/dom-video-capture.html
        video.hide();
        background(0);
        //here we need to give the variable mobilenet a value , so that it contains an imageClassifier, can you find how to do that in the ml5 documentation page?

      }

      function draw(){
        //the captured iamge from the webcam will be rendered here so that it is continuously shown:
        background(0)
        image(video, 0, 0)
        fill(255);
        textSize(32);
        text(label, 10, height-20)
      }
