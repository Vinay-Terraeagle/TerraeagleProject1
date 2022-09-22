import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import { Row, Col, Card } from "react-bootstrap";
import "../Styles/app.css";
import { useNavigate } from "react-router-dom";
import MealTypeComponent from "../Components/RecipeFilterComponents/MealTypeComponent";
import DietTypeComponent from "../Components/RecipeFilterComponents/DietTypeComponent";
import CaloriesComponent from "../Components/RecipeFilterComponents/CaloriesComponent";
import MacronutrientsComponent from "../Components/RecipeFilterComponents/MacronutrientsComponent";
import MustIncludeComponent from "../Components/RecipeFilterComponents/MustIncludeComponent";
import MustExcludeComponent from "../Components/RecipeFilterComponents/MustExcludeComponent";
import axios from "axios";
import { BASE_URL, TOKEN } from '../Backend/config';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default function RecipeView() {

  const recipiecardcarousels = {
    autoplay: true,
    autoplayTimeout: 4100,
    autoplayHoverPause:true,
    items:4,
    loop:false,
    dots:false,
    margin: 30
  }



  let navigate = useNavigate();
  function useRecipeInstructions(e) {
    e.preventDefault();
    let path = "/RecipeInstructionsView";
    navigate(path);
  }

  //recipeview
  const RecipeinstructionData = (event) => {
      const recipeid = event.currentTarget.getAttribute('data-recipe-Id')
      const authData = {
        headers: {
          Authorization: TOKEN
        }
      }    
      axios.post(`${BASE_URL}/view_recipe`, {recipe_id : recipeid} ,authData).then((response) => {
        // console.log(response)
        navigate("/RecipeInstructionsView",{
          state:{
            id:JSON.stringify(response),
            response: JSON.stringify(response),
            recipeid:recipeid.toString()
          }
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  const [activeFilter, setActiveFilter] = useState('MealType');

  const [showrecipie, setshowrecipie] = useState()
  const [trendingrecipe, settrendingrecipe] = useState()

  useEffect(() => {
    axios.get(`${BASE_URL}/client/recipe`, {
      headers: {
        Authorization: TOKEN
      }
    }).then((response) => {
      // trendingrecipes
      const trendingrecipesdata = response.data.data.trending_recipes
      if (trendingrecipesdata !== undefined && trendingrecipesdata.length > 0) {
        const recipeLists = trendingrecipesdata.map((item, i) =>
          <Col>
            <Card onClick={RecipeinstructionData} className="recipiecard" data-recipe-Id={item.id} key={i}>
              <Card.Img
                variant="top"
                src={item.image}
                className="recipe-img"
              />
              <Card.Body
                style={{
                  marginTop: "6em",
                  textAlign: "center",
                }}
              >
                <Card.Title>{item.recipe_name}</Card.Title>
                <Card.Text>{item.total_cals} kcal</Card.Text>
                <Col>
                  <span>{item.ingredient_count} </span>
                  <span className="smallTxt">Ingredient Count</span>
                </Col>
                <Col>
                  <span className="smallTxt">{item.diet_type} </span>
                  <span className="smallTxt">Diet type</span>
                </Col>
                <Col>
                  <span>{item.Timing} </span>
                  <span className="smallTxt">Timing</span>
                </Col>
                <Row className="cal-wrapper">
                  <Col>
                    <span>{item.total_cals_carbs} </span>
                    <span>Carbs</span>
                  </Col>
                  <Col className="protien-wrapper">
                    <span>{item.total_cals_protein} </span>
                    <span>Protien</span>
                  </Col>
                  <Col>
                    <span>{item.total_cals_fats} </span>
                    <span>Fats</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )
        settrendingrecipe(recipeLists)
      }

      // recipieData
      const recipeDataList = response.data.data.recipe_details
      // console.log(recipeDataList)
      if (recipeDataList !== undefined && recipeDataList.length > 0) {
        const recipesData = recipeDataList.map((item, i) =>
          <Col>
            <Card onClick={useRecipeInstructions} className="recipiecard" recipe-Id={item.id} key={i}>
              <Card.Img
                variant="top"
                src={item.image}
                className="recipe-img"
              />
              <Card.Body
                style={{
                  marginTop: "6em",
                  textAlign: "center",
                }}
              >
                <Card.Title>{item.recipe_name}</Card.Title>
                <Card.Text>{item.total_cals} kcal</Card.Text>
                <Col>
                  <span>{item.ingredient_count} </span>
                  <span className="smallTxt">Ingredient Count</span>
                </Col>
                <Col>
                  <span className="smallTxt">{item.diet_type} </span>
                  <span className="smallTxt">Diet type</span>
                </Col>
                <Col>
                  <span>{item.Timing} </span>
                  <span className="smallTxt">Timing</span>
                </Col>
                <Row className="cal-wrapper">
                  <Col>
                    <span>{item.total_cals_carbs} </span>
                    <span>Carbs</span>
                  </Col>
                  <Col className="protien-wrapper">
                    <span>{item.total_cals_protein} </span>
                    <span>Protien</span>
                  </Col>
                  <Col>
                    <span>{item.total_cals_fats} </span>
                    <span>Fats</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )
        setshowrecipie(recipesData)
      }

    }).catch((error) => {
      console.log(error)
    })
  }, [trendingrecipesdata]);

  

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h2 className="pt-5"> Healthy and nutritious food recipes</h2>

        <div className="recipe-container mt-5">
          <section className="mb-5">
            <div>
              <div className="d-flex justify-content-between align-items-baseline">
                <h4 className="mt-5 bf-header">Trending Recipes</h4>
              </div>
              <Row style={{ marginTop: "2em" }}>
                <OwlCarousel {...recipiecardcarousels}>
                {trendingrecipe}
                </OwlCarousel>
                
                
              </Row>
            </div>
          </section>
          <section className="mb-5 mt-5 pt-2">
            <h3 style={{ color: '#FF746E' }}>Search your favourite recipes</h3>
            <div className="mt-3 pr-4 pl-4 mb-3">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control"
                  name="recipe_name"
                  id="recipe_name"
                  placeholder="Search Recipe"
                />
                <button type="submit" class="input-group-text search-recipe justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
                </button>
              </div>
              <div className="mt-2">
                <div class="col-2 fs-18 filter-wrapper d-inline-flex">
                  Filter By:
                  <span class="arrow-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="arrow-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <button
                  className="btn rounded-pill btn-outline-primary mr-1"
                  id="meal_type"
                  onClick={() => setActiveFilter('mealType')}
                >
                  Meal Type
                </button>
                <button
                  className="btn rounded-pill btn-outline-secondary mr-1"
                  id="diet_type" onClick={() => setActiveFilter('dietType')}
                >
                  Diet Type
                </button>
                <button
                  className="btn rounded-pill btn-outline-success mr-1"
                  id="calories" onClick={() => setActiveFilter('calories')}
                >
                  Calories
                </button>
                <button
                  className="btn rounded-pill btn-outline-danger mr-1"
                  id="macronutrients" onClick={() => setActiveFilter('macronutrients')}
                >
                  Macronutrients
                </button>
                <button
                  className="btn rounded-pill btn-outline-warning mr-1"
                  id="must_include" onClick={() => setActiveFilter('mustInclude')}
                >
                  Must Include
                </button>
                <button
                  className="btn rounded-pill btn-outline-info mr-1"
                  id="must_exclude" onClick={() => setActiveFilter('mustExclude')}
                >
                  Must Exclude
                </button>
              </div>

              {activeFilter === "mealType" && <MealTypeComponent />}

              {activeFilter === "dietType" && <DietTypeComponent />}

              {activeFilter === "calories" && <CaloriesComponent />}

              {activeFilter === "macronutrients" && <MacronutrientsComponent />}

              {activeFilter === "mustInclude" && <MustIncludeComponent />}

              {activeFilter === "mustExclude" && <MustExcludeComponent />}


              {(activeFilter === "mealType" || activeFilter === "dietType" || activeFilter === "calories" || activeFilter === "macronutrients" || activeFilter === "mustInclude" || activeFilter === "mustExclude") &&

                <div className="form-group row search_filter">
                  <div className="col-12 mb-4">
                    <label className="col-4" />
                    <button
                      type="button"
                      className="btn btn-primary col-sm-1 col-md-4 col-lg-3"
                      id="search_filter"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              }
            </div>
          </section>

          <section>
            <Row style={{ marginTop: "10em" }}>
              {showrecipie}
              {/* <Col>
                <Card onClick={useRecipeInstructions}>
                  <Card.Img
                    variant="top"
                    src={Breakfast}
                    className="recipe-img"
                  />
                  <Card.Body
                    style={{
                      marginTop: "7em",
                      textAlign: "center",
                    }}
                  >
                    <Card.Title>Blueberry Toast</Card.Title>
                    <Card.Text>260 kcal</Card.Text>
                    <Row className="cal-wrapper">
                      <Col>
                        <span>156g </span>
                        <span>Carbs</span>
                      </Col>
                      <Col className="protien-wrapper">
                        <span>56g </span>
                        <span>Protien</span>
                      </Col>
                      <Col>
                        <span>16g </span>
                        <span>Fats</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col>
                <Card onClick={useRecipeInstructions}>
                  <Card.Img variant="top" src={H1} className="recipe-img" />
                  <Card.Body
                    style={{
                      marginTop: "7em",
                      textAlign: "center",
                    }}
                  >
                    <Card.Title>Blueberry Toast</Card.Title>
                    <Card.Text>260 kcal</Card.Text>
                    <Row className="cal-wrapper">
                      <Col>
                        <span>156g </span>
                        <span>Carbs</span>
                      </Col>
                      <Col className="protien-wrapper">
                        <span>56g </span>
                        <span>Protien</span>
                      </Col>
                      <Col>
                        <span>16g </span>
                        <span>Fats</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col>
                <Card>
                  <Card.Img variant="top" src={H2} className="recipe-img" />
                  <Card.Body
                    style={{
                      marginTop: "7em",
                      textAlign: "center",
                    }}
                  >
                    <Card.Title>Blueberry Toast</Card.Title>
                    <Card.Text>260 kcal</Card.Text>
                    <Row className="cal-wrapper">
                      <Col>
                        <span>156g </span>
                        <span>Carbs</span>
                      </Col>
                      <Col className="protien-wrapper">
                        <span>56g </span>
                        <span>Protien</span>
                      </Col>
                      <Col>
                        <span>16g </span>
                        <span>Fats</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col>
                <Card>
                  <Card.Img variant="top" src={H3} className="recipe-img" />
                  <Card.Body
                    style={{
                      marginTop: "7em",
                      textAlign: "center",
                    }}
                  >
                    <Card.Title>Blueberry Toast</Card.Title>
                    <Card.Text>260 kcal</Card.Text>
                    <Row className="cal-wrapper">
                      <Col>
                        <span>156g </span>
                        <span>Carbs</span>
                      </Col>
                      <Col className="protien-wrapper">
                        <span>56g </span>
                        <span>Protien</span>
                      </Col>
                      <Col>
                        <span>16g </span>
                        <span>Fats</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> */}
            </Row>
          </section>


        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
