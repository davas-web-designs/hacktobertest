// Your code will go here
      // open up your console - if everything loaded properly you should see 0.3.1
      console.log('ml5 version:', ml5.version);

      let mobilenet;

      let video;


      let label = '';

      //itialize variables:
      //check the comments below and docs to understand waht variables are required.
      //In short words, you need some variables for the buttons, refer to the p5 docs
      // to learn about that, and a variable for the classifer , refer to the ml5 docs
      // to learn how to do that

      function modelReady(){
        console.log('Model is ready!!');
        //here we want to predict what the image was, can you help me write that code? hint, use the ml5 documentation

        //in exercise two, we need to to the same as in 1 but with a contiuous loop, this is pretty simple to do, hint on how: https://github.com/ml5js/ml5-examples/blob/development/p5js/ImageClassification/ImageClassification_Video/sketch.js

      }

      function videoReady(){
        console.log("video is ready");
      }

      //gotResults: give value to the result and call recursively the gotResults function with the classify function.
      //refer to the docs to know how to do that
      function gotResults(error, result){
          if(error) {
            console.error(error)
          }
          else {
            //feel free to explore the results yourself:

            //dont console.log in the second exercise:
            label = result[0].label;
            //console.log(result[0].label)

          }
      }

      //we need a handler function for when the training button is pressed.
      //we need to pass it one parameter that represents something related to the learning rate...
      //try to print it.
      //if you see it getting 0 or null value, you can then point to the gotResults function
      //via the classify function , refer to the docs to know what to do.


      //setup function : give value to all of the variables
      //in this example you need to:
      // - instatiate a featureExtractor from the ml5 lib
      // - make a classifier out of that featureExtractor
      // - build a way of selecting diferent inputs (that will be different kind of images)
      // this will be the labels for the diferent groups you want to create
      // - also, make an interface to tell when to do the training
      // buttons are suggested for this task
      function setup(){
        createCanvas(640, 550);
        video = createCapture(VIDEO);
        //video = ? give the variable video a value so that it captures whats on the webcam, hint: https://p5js.org/examples/dom-video-capture.html
        video.hide();
        background(0);
        //here we need to give the variable mobilenet a value , so that it contains an imageClassifier, can you find how to do that in the ml5 documentation page?

      }

      //draw function: left as in previous examples
      //no need of extra code
      function draw(){
        //the captured iamge from the webcam will be rendered here so that it is continuously shown:
        background(0)
        image(video, 0, 0)
        fill(255);
        textSize(32);
        text(label, 10, height-20)
      }
