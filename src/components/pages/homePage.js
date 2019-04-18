import React, { Component } from 'react';

import Post from './postAbstract'

class Homepage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titles: [
            "Exploring Branch Brook Park",
            "How I made my first single page web application",
            "Recipe: Seafood Spaghetti",
        ],
        images: [
            require('./flower.JPG'),
            require('./code.jpg'),
            require('./spaghetti.jpg'),
        ],
        dates: [
            "4/15/2019",
            "4/12/2019",
            "4/8/2019",
        ],
        summaries: [
            "Spring is coming, so winter is not far away. One thing I have learned in the past decades is that pleasant weather should never be wasted. Just two words, get out. Why Branch Brook Park? One, not too far. And two, CHERRY BLOSSOM!!! What more could you want?",
            "The fourth assignment of the Internet Computing class is to make a single page application using React JS. It combines several things I have learned so far. And what makes this assignment even more interesting and challenging is that to implement my app, I also need to do a little bit research online by myself.",
            "Lately I've seen this seafood spaghetti on TV a lot. It looks so yummy that I even went to an Italian restaurant just to try this dish. The size they serve was huge but I ate it all. I told myself that I have to learn to make this. And guess what, it was extremely easy to make. Twenty minutes is more than enough. Can't wait to start!",
        ],
        contents: [
            [
                "Spring is coming, so winter is not far away. One thing I have learned in the past decades is that pleasant weather should never be wasted. Just two words, get out. Why Branch Brook Park? One, not too far. And two, CHERRY BLOSSOM!!! What more could you want?",
                "The keyword for the whole trip was LUCKY! It was the very end of the blossom season. A part of the cherry blossom trees already started to grow leaves. But by the lake side, there was still a large part that was filled with lovely pink. It was so so so… romantic. The petal falls off to the ground and formed a little pink stream. Now I know why its called brook park.",
                "There were not many people in the park because of the crazily funny weather. It was sunny but also extremely windy. It felt like the wind can swap me away. I am pretty sure after today there will not be many flowers left. Then it started to rain! With the sun still out there, it was a sunny rain. BOOM! Guess what I saw? The RAINBOW!!!! I haven’t seen one in many many years. I almost can not remember when was the last time that I saw a rainbow, of course hanging in the air. I can not express how exciting I was, jumping like a child.  It was there for like just two minutes and we met each other and said hi to each other. It was the best day of the year so far! See, when you get out there, there are always surprises waiting for you. And I mean good surprises.",
            ],
            [
                "The fourth assignment of the Internet Computing class is to make a single page application using React JS. It combines several things I have learned so far. And what makes this assignment even more interesting and challenging is that to implement my app, I also need to do a little bit research online by myself.",
                "I spent about five whole days to work on this assignment. The basic structure of this one-page application is not complex whereas the real challenge is to grasp the underlying technologies that is used to implement the website. The first thing I did was going along with the React JS official tutorial to implement a tic tac toe game. Although this starter needs some time to be digested, it is indeed entertaining and excessively useful for this project.",
                "There are several things that I accomplished in this assignment. Besides the framework and UI design, I managed to structure this 'static' web page compatible with dynamic contents. In other words, all of the information displayed in my components are passed through props rather than plain text. It takes more time to implement this method including the debugging process. But I definitely believe that I learned more and gained experience that is closer to what is happening in the industry nowadays. Meanwhile, I learned to call third party API like google news API in React js framework. On the google website, it states that I can install a package so that I don't have to worry about the fundamental transactions. But I still chose to understand what is going on underneath the hood. I didn't find a single tutorial that can resolve all of my problems. So what happened was I combined 7 or 8 tutorials to finally implement the feather that calls the google news API every 5 seconds and display the response in my webpage."
            ],
            [
                "Lately I've seen this seafood spaghetti on TV a lot. It looks so yummy that I even went to an Italian restaurant just to try this dish. The size they serve was huge but I ate it all. I told myself that I have to learn to make this. And guess what, it was extremely easy to make. Twenty minutes is more than enough. Can't wait to start!",
                "I don’t have all the ingredients to make the authentic Italian spaghetti, so what I made was my own version.",
                "Ingredients: tomato, garlic, onion, small red pepper, spaghetti, shrimp, green onion, salt, sugar, pepper, soy sauce, olive oil and water.",
                "Step 1: make tomato sauce. Simmer tomato with a little bit olive oil and soy sauce until thick. This step may take about 20 minutes.",
                "Step2: cook shrimp. Put shrimp into cold water, and heat until it starts to boil. Take the shrimp out and put it aside. Reserve the water for later use.",
                "Step 3: cook spaghetti. Follow the instructions that coming with the spaghetti. Add some salt into the water. After the spaghetti is well cooked, take it out and put it aside. Remember to add some olive oil and pepper and mix properly.",
                "Step 4: wrap it up. Add all ingredients in the following order: olive oil, garlic, onion, small red pepper, tomato sauce, shrimp water, shrimp, spaghetti. DONE! Congrats!!!",
            ],
        ],
      };
    }

  renderPost(i) {
    return (
      <Post
        title={this.state.titles[i]}
        image={this.state.images[i]}
        date={this.state.dates[i]}
        summary={this.state.summaries[i]}
        content={this.state.contents[i]}
      />
    );
  }

  render() {
    return (
      <div>
        <main>
          {this.renderPost(0)}
          {this.renderPost(1)}
          {this.renderPost(2)}
        </main>
      </div>
    );
  }
}

export default Homepage;
