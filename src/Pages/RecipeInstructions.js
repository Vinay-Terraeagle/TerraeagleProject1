import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'   
import { Row, Col } from 'react-bootstrap'
import BreakfastRecipe from "../assets/images/blueberryToast.jpg";
import { useLocation } from 'react-router-dom';
import { useState } from 'react'

export default function RecipeInstructionsView() {
    
    const [recipeData , setrecipeData] = useState();

    const recipeResponseData = useLocation();
    
    useEffect(() => {
        const recipeInstructiondata = JSON.parse(recipeResponseData.state.response)
        // RecipeviewDetails(recipeInstructiondata)
        console.log(recipeInstructiondata)



        const data = recipeInstructiondata.data.data.recipe_details

        const recipepageViewHTML = (
            <Row className='p-5 align-items-start'>
        <Col className='col-6'>
            <div>
                <img src={data.image} className="" alt="/" width={400} height={300} />
            </div>

            <div className='mt-5'>
                <Row className='mb-4'>
                    <Col className='col-6'><h4>Ingredients</h4></Col>
                    <Col className='col-6'><span>4 items</span></Col>
                </Row>
                <Row className='align-items-center mb-4'>
                    <Col className='col-6'>
                        <img src={data.ingedient_list[0].image} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                        <span>{data.ingedient_list[0].name}</span></Col>
                    <Col className='col-6'><span>400g</span></Col>
                </Row>
                
                <Row className='align-items-center mb-4'>
                    <Col className='col-6'>
                        <img src={data.ingedient_list[1].image} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                        <span>{data.ingedient_list[1].name}</span></Col>
                    <Col className='col-6'><span>250g</span></Col>
                </Row>
                <Row className='align-items-center mb-4'>
                    <Col className='col-6'>
                        <img src={data.ingedient_list[2].image} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                        <span>{data.ingedient_list[2].name}</span></Col>
                    <Col className='col-6'><span>350g</span></Col>
                </Row>
                <Row className='align-items-center mb-4'>
                    <Col className='col-6'>
                        <img src={data.ingedient_list[3].image} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                        <span>{data.ingedient_list[3].name}</span></Col>
                    <Col className='col-6'><span>600g</span></Col>
                </Row>
                <Row className='align-items-center mb-4'>
                    <Col className='col-6'>
                        <img src={data.ingedient_list[4].image} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                        <span>{data.ingedient_list[4].name}</span></Col>
                    <Col className='col-6'><span>600g</span></Col>
                </Row>
            </div>
        </Col>
        <Col className='col-6'>
            <div><h1>{data.name}</h1></div>
            <Row className='mt-3 fs-18'>
                <Col>
                    <span className='fw-bold'>Total min: </span>
                    <span>{data.Timing} min</span>
                </Col>
                <Col>
                    <span className='fw-bold'>Diet Type </span>
                    <span> {data.diet_type}</span>
                </Col>
                {/* <Col>
                    <span className='fw-bold'>Yield: </span>
                    <span>12 makes</span>
                </Col> */}
            </Row>
            <Row className='mt-5'>
                <div className='fs-22 mb-3'>Nutrition per serving</div>
                <Col className='col-3'>
                    <div className='calories-wrapper'>
                        <div className='cal-count d-flex justify-content-center'>{data.total_cals_protein} g</div>
                        <div className='cal-name d-flex justify-content-center'>Protien</div>
                    </div>
                </Col>
                <Col className='col-3'>
                    <div className='calories-wrapper'>
                        <div className='cal-count d-flex justify-content-center'>{data.total_cals} g</div>
                        <div className='cal-name d-flex justify-content-center'>Carbs</div>
                    </div>
                </Col>
                <Col className='col-3'>
                    <div className='calories-wrapper'>
                        <div className='cal-count d-flex justify-content-center'>{data.total_cals_fats} g</div>
                        <div className='cal-name d-flex justify-content-center'>Fats</div>
                    </div>
                </Col>
            </Row>
            <div className='mt-5'>
                <h4 className='mb-3'>Instructions</h4>
                <Row className='mb-3'>
                    <Col className='instruction-count col-2'>1</Col>
                    <Col className='col-10'>{data.prep_method}</Col>
                </Row>
                {/* <Row className='mb-3'>
                    <Col className='instruction-count col-2'>2</Col>
                    <Col className='col-10'>Add the spices such as salt, red chili powder, turmeric powder, ginger garlic paste.</Col>
                </Row>
                <Row className='mb-3'>
                    <Col className='instruction-count col-2'>2</Col>
                    <Col className='col-10'>Add chopped onions, tomatoes, chopped coriander leaves, black pepper powder.</Col>
                </Row>
                <Row className='mb-3'>
                    <Col className='instruction-count col-2'>4</Col>
                    <Col className='col-10'>Add chopped green chili if required or skip if making for kids</Col>
                </Row>
                <Row className='mb-3'>
                    <Col className='instruction-count col-2'>5</Col>
                    <Col className='col-10'>Mix all the ingredients well. Add oil/butter to the griddle and heat it. Take each bread slice and dip it into the egg mixture. Make sure both sides are cooked well.</Col>
                </Row> */}
            </div>
        </Col>
    </Row>
    )
    setrecipeData(recipepageViewHTML)

    },[recipeResponseData]);
    
    
        
    return (

        <React.Fragment>
            <Header />
            
            <div className='container mt-3'>
            {/* {recipeviews} */}
                {/* <Breadcrumbs crumbs={crumbs} selected={selected}/> */}
                <h2 className=""> Recipes Preparation Steps</h2>
               
                <div className='recipe-instruction-container w-100'>
                   {recipeData}

                     {/* <Row className='p-5 align-items-start'>
                        <Col className='col-6'>
                            <div>
                                <img src={recipeData} className="" alt="/" width={400} height={300} />
                            </div>

                            <div className='mt-5'>
                                <Row className='mb-4'>
                                    <Col className='col-6'><h4>Ingredients</h4></Col>
                                    <Col className='col-6'><span>4 items</span></Col>
                                </Row>
                                <Row className='align-items-center mb-4'>
                                    <Col className='col-6'>
                                        <img src={BreakfastRecipe} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                                        <span>Tomatoes</span></Col>
                                    <Col className='col-6'><span>400g</span></Col>
                                </Row>
                                
                                <Row className='align-items-center mb-4'>
                                    <Col className='col-6'>
                                        <img src={BreakfastRecipe} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                                        <span>Zuccuni</span></Col>
                                    <Col className='col-6'><span>250g</span></Col>
                                </Row>
                                <Row className='align-items-center mb-4'>
                                    <Col className='col-6'>
                                        <img src={BreakfastRecipe} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                                        <span>Capsicum</span></Col>
                                    <Col className='col-6'><span>350g</span></Col>
                                </Row>
                                <Row className='align-items-center mb-4'>
                                    <Col className='col-6'>
                                        <img src={BreakfastRecipe} className="rounded-circle mr-1" alt="/" width={50} height={50} />
                                        <span>Carrot</span></Col>
                                    <Col className='col-6'><span>600g</span></Col>
                                </Row>
                            </div>
                        </Col>

                        <Col className='col-6'>
                            <div><h1>Chickpea & coconut curry</h1></div>
                            <Row className='mt-3 fs-18'>
                                <Col>
                                    <span className='fw-bold'>Total min: </span>
                                    <span>40 min</span>
                                </Col>
                                <Col>
                                    <span className='fw-bold'>Prep: </span>
                                    <span>10 min</span>
                                </Col>
                                <Col>
                                    <span className='fw-bold'>Yield: </span>
                                    <span>12 makes</span>
                                </Col>
                            </Row>

                            <Row className='mt-5'>
                                <div className='fs-22 mb-3'>Nutrition per serving</div>
                                <Col className='col-3'>
                                    <div className='calories-wrapper'>
                                        <div className='cal-count d-flex justify-content-center'>16.9g</div>
                                        <div className='cal-name d-flex justify-content-center'>Protien</div>
                                    </div>
                                </Col>
                                <Col className='col-3'>
                                    <div className='calories-wrapper'>
                                        <div className='cal-count d-flex justify-content-center'>29g</div>
                                        <div className='cal-name d-flex justify-content-center'>Carbs</div>
                                    </div>
                                </Col>
                                <Col className='col-3'>
                                    <div className='calories-wrapper'>
                                        <div className='cal-count d-flex justify-content-center'>10g</div>
                                        <div className='cal-name d-flex justify-content-center'>Fats</div>
                                    </div>
                                </Col>
                            </Row>

                            <div className='mt-5'>
                                <h4 className='mb-3'>Instructions</h4>
                                <Row className='mb-3'>
                                    <Col className='instruction-count col-2'>1</Col>
                                    <Col className='col-10'>Firstly, in a mixing bowl, break two eggs.</Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col className='instruction-count col-2'>2</Col>
                                    <Col className='col-10'>Add the spices such as salt, red chili powder, turmeric powder, ginger garlic paste.</Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col className='instruction-count col-2'>2</Col>
                                    <Col className='col-10'>Add chopped onions, tomatoes, chopped coriander leaves, black pepper powder.</Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col className='instruction-count col-2'>4</Col>
                                    <Col className='col-10'>Add chopped green chili if required or skip if making for kids</Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col className='instruction-count col-2'>5</Col>
                                    <Col className='col-10'>Mix all the ingredients well. Add oil/butter to the griddle and heat it. Take each bread slice and dip it into the egg mixture. Make sure both sides are cooked well.</Col>
                                </Row>

                            </div>

                        </Col>
                    </Row>  */}

                </div>
                
            </div>
            <Footer />
        </React.Fragment>




    )
}
