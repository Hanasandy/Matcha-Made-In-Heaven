import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import { Row, Col } from 'antd';



var Recipes = React.createClass({

render: function() {
    
    return (

           <div>

            <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

             <Header SelectedMenu="Recipes"/>
             	       
             	   
             	<div>         
            		<h2 className="recipe-menu">Matcha Recipes</h2>
        		</div>
        		
        		<div className="recipes">
                    <div className="pancakes">
            		<div>
                		<h2 className="food">Matcha Pancakes</h2>
                	</div>
                	<Row>
                        <Col span={8}>
                        <img className="img-recipe" src="../images/pancakes.jpg" alt="pancakes"/>
                        </Col>
                        <Col span={8} offset={8}>
                            <h2>Ingredients:</h2>
                            <ul >
                                <li>~1 egg</li>
                                <li>~1/3 cup milk</li>
                                <li>~2 tsp vegetable oil or melted butter (plus more for skillet)</li>
                                <li>~2 tbsp sugar</li>
                                <li>~1/2 tsp vanilla extract</li>
                                <li>~1/2 cup flour</li>
                                <li>~1 tbsp matcha powder</li>
                                <li>~1 1/2 tsp baking powder</li>
                                <li>~pinch of salt</li>
                            </ul>
                        </Col>
                    </Row>
                    <div>
                        <h2  className="directions">Directions:</h2>
                            <ol className="list-recipe">
                                <li>1. In a large bowl, whisk together the egg, milk, vegetable oil or melted butter, sugar, and vanilla extract. Add the flour, matcha powder, baking powder, and salt, and whisk 7-10 times, just until the batter comes together; the batter may and should be lumpy.</li>
                                <li>2. Heat a heavy cast-iron skillet over medium-low heat. Brush with vegetable oil or butter. Using a 1/4 cup measure, dollop circles of pancake batter onto skillet. Wait until bubbles appear and pop on the surface, then flip the pancakes and cook for another minute or so. Stack pancakes and serve hot with butter and maple syrup.</li>
                            </ol>
                    </div>
                    </div>
                    <hr />
                    <div className="smoothie">
                    <div>
                        <h2 className="food">Matcha Green Tea Smoothie</h2>
                    </div>
                    <Row>
                    <Col span={8}>
                        <img className="img-recipe" src="../images/smoothie.jpg" />
                    </Col>
                    <Col span={8} offset={8}>    
                        <h2>Ingredients:</h2>
                            <ul>
                                <li>~1 Large Mango (fresh or frozen)</li>
                                <li>~2 Frozen Bananas</li>
                                <li>~2 Large Handfuls (~5oz/140g) Baby Spinach</li>
                                <li>~2 tsp Matcha Green Tea Powder</li>
                                <li>~1 cup (240ml) Light Coconut Milk</li>
                            </ul>
                    </Col>
                    </Row>
                    <div>
                        <h2 className="directions">Directions:</h2>
                            <ol className="list-recipe">
                                <li>1. Add the coconut milk to your blender jug, followed by the matcha green tea powder and spinach. Blend.</li>
                                <li>2. Add the mango and frozen bananas and blend until creamy and smooth.</li>
                            </ol>
                    </div>
                    </div>
                    <hr />
                    <div className="brownie">
                        <div>
                        <h2 className="food">Green Tea White Chocolate Brownies</h2>
                        </div>

                            <Row>
                    <Col span={8}>                 
                        <img className="img-recipe" src="../images/brownie.jpg" />
                    </Col>
                    <Col span={8} offset={8}>  
                    
                        <h2>Ingredients:</h2>
                            <ul>
                                <li>~1 cup flour </li>
                                <li>~1/4 sweet matcha powder </li>
                                <li>~6 oz white chocolate </li>
                                <li>~6 tbsp butter </li>
                                <li>~2 eggs </li>
                                <li>~1/2 tsp vanilla</li>
                                <li>~1/4 tsp almond extract </li>
                                <li>~1/2 cup slivered almonds, toasted</li>
                                <li>~1/2 cup white chocolate chips </li>
                            </ul>
                    </Col>
                    </Row>
                    <div>

                    	<h2 className="directions">Directions:</h2>
                    		<ol className="list-recipe">
                        		<li>1. Preheat oven at 350. Grease and flour an 8x8 baking pan.</li>
                        		<li>2. In a large microwave safe bowl, combine the butter and white chocolate and heat at thirty second intervals until melted and smooth. Set aside to cool for about 10 minutes.</li>
                        		<li>3. Stir in eggs and matcha powder until combined, then add flour, vanilla, and almond extract just until incorporated. Lastly stir in almonds and white chocolate chips.</li>
                        		<li>4. Pour into prepared pan and spread into even layer. Bake about 20 - 25 minutes or until lightly browned.</li>
                        		<li>5. Cool in pan on a wire rack. Cut and enjoy.</li>
                    		</ol>
                	
            	       </div>
                       </div>
                       <hr />
           </div>
             <Footer/>

            </div>

         );
    }

});

module.exports = Recipes;