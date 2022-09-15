import React, { useEffect, useState } from 'react'
import '../Styles/app.css'
// carousels
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import NoDataFound from './NoDataFound/NoDataFound'

export default function MealsComp(mealDetails) {

    const MealSlider = {
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        // margin:50,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items:1,
            },
            768:{
                items: 2,
            },
            1000: {
                items: 1.8,
            },
        }
    } 

    const [breakfastData, setBreakfastData] = useState()
    const [snacksData, setSnacksData] = useState()
    const [lunchData, setLunchData] = useState()
    const [dinnerData, setDinnerData] = useState()
    const [midEveningData, setMidEveningData] = useState()
    const [midMorningData, setMidMorningData] = useState()
    const [noMealsData, setNoMealsData] = useState()

  useEffect(() => {
    if(mealDetails.mealData !== undefined) {

      if(mealDetails.mealData.breakfast_details.length  === 0 && mealDetails.mealData.lunch_details.length === 0 &&
        mealDetails.mealData.snacks_details.length === 0 && mealDetails.mealData.dinner_details.length === 0 &&
        mealDetails.mealData.mid_evening_details.length === 0 && mealDetails.mealData.mid_morning_details.length === 0 ) {
          setNoMealsData('no-meals-data-toshow')
      } else {
        setNoMealsData('meals-toshow')
        if(mealDetails.mealData.breakfast_details.length > 0) {
          const breakfastList = mealDetails.mealData.breakfast_details.map((item,i) => 
              <div className='crd-row' data-id={item.recipe_id}>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Breakfast</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setBreakfastData(breakfastList)
        }

        if(mealDetails.mealData.lunch_details.length > 0) {
          const LunchList = mealDetails.mealData.lunch_details.map((item,i) => 
              <div className='crd-row'  data-id={item.recipe_id}>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Lunch</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setLunchData(LunchList)
        }
        
        if(mealDetails.mealData.snacks_details.length > 0) {
          const snacksList = mealDetails.mealData.snacks_details.map((item,i) => 
              <div className='crd-row'>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Snacks</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setSnacksData(snacksList)
        }

        if(mealDetails.mealData.dinner_details.length > 0) {
          const dinnerList = mealDetails.mealData.dinner_details.map((item,i) => 
              <div className='crd-row'>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Dinner</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setDinnerData(dinnerList)
        }
        if(mealDetails.mealData.mid_evening_details.length > 0) {
          const midEveningList = mealDetails.mealData.mid_evening_details
          .map((item,i) => 
              <div className='crd-row'>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Mid Evening</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setMidEveningData(midEveningList)
        }
        
        if(mealDetails.mealData.mid_morning_details.length > 0){
          const midMorningList = mealDetails.mealData.mid_morning_details
          .map((item,i) => 
              <div className='crd-row'>
                <div className='cml-img'>
                  <img src={item.image} className="crd-img" alt='/' />
                </div>
                <div className='txtrws'>
                  <h5>Mid Morning</h5>
                  <p>{item.name}</p>
                </div>
                <div className='kols'>
                  <h4>{item.total_cals}</h4>
                  <p>kcal</p>
                </div>
                <div className='carbs-wrp'>
                <div className='carbs-col'>
                  <p>{item.total_cals_carbs}G</p>
                  <h4>Carbs</h4>
                </div>
                <div className='carbs-col'>
                  <p>{item.total_cals_fats} G</p>
                  <h4>Fat</h4>
                </div>
                <div className='carbs-col'>
                <p>{item.total_cals_protein} G</p>
                  <h4>Protein</h4>
                </div>
                </div>
              </div>
          )
          setMidEveningData(midMorningList)
        }
      }

    } 
  },[mealDetails.mealData])


  return (
    <>
      <section>
        <div className='meals-card'>
          <div className='headpart'>
            <h1>Today Meals</h1>
          </div>
          <div className="cml-carm">
            <div className={`cml-cards meal-data-wrapper ${noMealsData}`}>
              <OwlCarousel {...MealSlider}>
                {breakfastData}
                {lunchData}
                {dinnerData}
                {snacksData}
                {midEveningData}
                {midMorningData}
                
              </OwlCarousel>
            </div>
            <NoDataFound className={`no-data-wrapper ${noMealsData}`}/>
          </div>
        </div>
      </section>
    </>
  )
}
