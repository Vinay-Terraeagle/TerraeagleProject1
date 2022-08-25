import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import { Container, Row, Col, Card} from "react-bootstrap";
import '../Styles/app.css'
import Breakfast from "../assets/images/blueberryToast.jpg";
import H1 from "../assets/images/h1.png";
import H2 from "../assets/images/h2.png";
import H3 from "../assets/images/h3.jpg";
import H4 from "../assets/images/h4.jpg";
import H5 from "../assets/images/h5.jpg"
import { Link } from "react-router-dom";

export default function RecipeView() {

    return (
        <React.Fragment>
            <Header />
            <div className="container recipe-container">
                <section>
                    <div>
                        <h2 className="pt-5"> Healthy and nutritious food recipes</h2>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h4 className="mt-5 bf-header">Breakfast Recipes</h4>
                            <Link to="">
                                View All
                            </Link>

                        </div>
                        <Row style={{ marginTop: '5em' }}>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)',
                                        background:'linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209))'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)',
                                        background:'linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209))'
                                        }}>
                                <Card.Img variant="top" src={H1} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)',background:'linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209))'
                                        }}>
                                <Card.Img variant="top" src={H2} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)',
                                        background:'linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209))'
                                        }}>
                                <Card.Img variant="top" src={H3} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            
                        </Row>

                    </div>
                </section>

                <section>
                    <div className="lunch-container">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h4 className="mt-5 bf-header">Lunch Recipes</h4>
                            <Link to="">
                                View All
                            </Link>

                        </div>
                        <Row style={{ marginTop: '5em' }}>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={H4} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={H5} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={H4} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={H3} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            
                        </Row>

                    </div>
                </section>

                <section>
                    <div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h4 className="mt-5 bf-header">Snacks Recipes</h4>
                                <Link to="">
                                    View All
                                </Link>

                            </div>
                        
                        <Row style={{ marginTop: '5em' }}>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={H1} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            
                        </Row>

                    </div>
                </section>

                <section style={{paddingBottom: '50px'}}>
                    <div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <h4 className="mt-5 bf-header">Dinner Recipes</h4>
                            <Link to="">
                                View All
                            </Link>

                        </div>
                    
                        <Link to="">
                            View All
                        </Link>
                        <Row style={{ marginTop: '5em' }}>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            <Col>
                            <Card style={{ width: '14rem',
                                        height: '19em', 
                                        '--bs-card-cap-bg':"none",
                                        boxShadow:'0px 0px 10px rgb(0 0 0 / 30%)'
                                        }}>
                                <Card.Img variant="top" src={Breakfast} className="recipe-img" />
                                <Card.Body style = {{   
                                            marginTop: '7em',
                                            textAlign: 'center'
                                            }}>
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
                            </Col>
                            
                        </Row>

                    </div>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
}