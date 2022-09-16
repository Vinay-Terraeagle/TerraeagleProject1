import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import NoDataFound from './NoDataFound/NoDataFound'
import moment from 'moment'

export default function DietPlanComponent(myPlan) {
  let navigate = useNavigate(); 
    function renderRecipeInstructionsView(e) {
        e.preventDefault();
        let path = '/RecipeInstructionsView'; 
        navigate(path);
    } 
    const [bfList, setBfList] = useState()
    const [lunchList, setLunchList] = useState()
    const [snacksList, setSnacksList] = useState()
    const [dinnerList, setDinnerList] = useState()
    const [midEveningList, setMidEveningList] = useState()
    const [midMorningList, setMidMorningList] = useState()

    const [mealsBasedOnTime, setMealsBasedOnTime] = useState()
    const [showMealsBasedOnTime, setShowMealsBasedOnTime] = useState()
    const [noMealsData, setNoMealsData] = useState()
    useEffect(() => { 
      renderTimeBasedMeals()

      if(myPlan.myDietPlan.breakfast_details.length  === 0 && myPlan.myDietPlan.lunch_details.length === 0 &&
        myPlan.myDietPlan.snacks_details.length === 0 && myPlan.myDietPlan.dinner_details.length === 0 &&
        myPlan.myDietPlan.mid_evening_details.length === 0 && myPlan.myDietPlan.mid_morning_details.length === 0 ) {
          setNoMealsData('no-meals-data-toshow')
      } else {
        setNoMealsData('meals-data-toshow')
        if(myPlan.myDietPlan.breakfast_details.length > 0) {
          const bfList = myPlan.myDietPlan.breakfast_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Breakfast</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' data-recipe-id={item.recipe_id}  onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setBfList(bfList)

          if({mealsBasedOnTime} === "breakfast") {
            setShowMealsBasedOnTime(bfList)
          }
        }

        if(myPlan.myDietPlan.lunch_details.length > 0) {
          const lunchLists = myPlan.myDietPlan.lunch_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Lunch</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' data-recipe-id={item.recipe_id} onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setLunchList(lunchLists)
          if({mealsBasedOnTime} === "lunch") {
            setShowMealsBasedOnTime(lunchLists)
          }
        }

        if(myPlan.myDietPlan.snacks_details.length > 0) {
          const snacksLists = myPlan.myDietPlan.snacks_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Snacks</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' data-recipe-id={item.recipe_id} onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setSnacksList(snacksLists)
          if({mealsBasedOnTime} === "snacks") {
            setShowMealsBasedOnTime(snacksLists)
          }
        }

        if(myPlan.myDietPlan.dinner_details.length > 0) {
          const dinnerLists = myPlan.myDietPlan.dinner_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Dinner</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'data-recipe-id={item.recipe_id} onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setDinnerList(dinnerLists)
          if({mealsBasedOnTime} === "dinner") {
            console("ghsgfsdhf dhsd fhsdfhd")
            setShowMealsBasedOnTime(dinnerList)
          }
        }

        if(myPlan.myDietPlan.mid_evening_details.length > 0) {
          const midEveningLists = myPlan.myDietPlan.mid_evening_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Mid Evening</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' data-recipe-id={item.recipe_id} onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setMidEveningList(midEveningLists)
          if({mealsBasedOnTime} === "mid-evening") {
            setShowMealsBasedOnTime(midEveningLists)
          }
        }

        if(myPlan.myDietPlan.mid_morning_details.length > 0) {
          const midMorningLists = myPlan.myDietPlan.mid_morning_details.map((item,i) =>
            <div className='dt-rw' key={i}>
                <img src={item.image} className="crdmg" alt='/'/>
                <div className='dt-txt'>
                <h3>Mid Morning</h3>
                  <p>{item.name}</p>
                </div>
                <div className='ttl-grm'>
                  <h1>{item.total_cals}</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' data-recipe-id={item.recipe_id} onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
          )
          setMidMorningList(midMorningLists)
          if({mealsBasedOnTime} === "mid-morning") {
            setShowMealsBasedOnTime(midMorningLists)
          }
        }
      }

    },[]);

    const renderTimeBasedMeals = () => {
      const currentHour = moment().format("HH");
      if (currentHour >= 8 && currentHour < 10){
        setMealsBasedOnTime("breakfast")
      } else if (currentHour >= 10 && currentHour < 13){
        setMealsBasedOnTime("mid-morning")
      } else if (currentHour >= 13 && currentHour < 15){
        setMealsBasedOnTime("lunch")
      } else if (currentHour >= 15 && currentHour < 17){
        setMealsBasedOnTime("snacks")
      } else if (currentHour >= 17 && currentHour < 19){
        setMealsBasedOnTime("mid-evening")
      } else {
        setMealsBasedOnTime("dinner")
      }
    }
 return(
    <React.Fragment>
    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='dnr-bx'>
              <div className='dn-txb'>
                <div className='dn-hed'>
                  <h1>Todays Meals</h1>  
                  <div className={`kcl ${noMealsData}`}>
                    <h1>540 Kcal</h1>
                  </div>
                </div>
                <div>
                  <div  className={`dn-clb ${noMealsData}`}>
                    <div className='dn-crb'>
                      <h1>156 G</h1>
                      <p>Carbs</p>
                    </div>
                    <div className='dn-prot'>
                      <h1>32 G</h1>
                      <p>Protien</p>
                    </div>
                    <div className='dn-ft'>
                      <h1>32 G</h1>
                      <p>Protiens</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='brk-fst-mn'>
          <div className={`brk-cl ${noMealsData}`}>
            {bfList}
            {lunchList}
            {snacksList}
            {dinnerList}
            {midEveningList}
            {midMorningList}
          </div>
          <div className={`myplan-recipe no-data-wrapper ${noMealsData}`}>
            <NoDataFound  type="recipe"/>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='lch-bx'>
              <div className='ln-txb'>
                <div className='ln-hed'>
                  <h2 style={{textTransform:'capitalize'}}>{mealsBasedOnTime}</h2>
                  <div className={`kcl ${noMealsData}`}>
                    <h1>540 Kcal</h1>
                  </div>
                </div>
                <div>
                  <div  className={`ln-clb ${noMealsData}`}>
                    <div className='ln-crb'>
                      <h1>156 G</h1>
                      <p>Carbs</p>
                    </div>
                    <div className='ln-prot'>
                      <h1>32 G</h1>
                      <p>Protien</p>
                    </div>
                    <div className='ln-ft'>
                      <h1>32 G</h1>
                      <p>Fat</p>
                    </div>
                  </div> 
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    {/* dietplan */}
    <section>
      <div className='container'>
        <div className='detils-mn-col'>
          <div className='det-txt'>
            {/* <h1>Diet Plan</h1> */}
          </div>
          <div className={`diet-cl ${noMealsData}`}>
            {showMealsBasedOnTime}
          </div>
          <div className={`myplan-recipe no-data-wrapper ${noMealsData}`}>
            <NoDataFound type="recipe"/>
          </div>
        </div>
      </div>
    </section>

   
    </React.Fragment>
  )
}
