import React from 'react'
import { useNavigate } from "react-router-dom";
import crdmg from '../assets/images/h5.jpg'

export default function DietPlanComponent() {

  let navigate = useNavigate(); 
    function renderRecipeInstructionsView(e) {
        e.preventDefault();
        let path = '/RecipeInstructionsView'; 
        navigate(path);
    } 

  return (
    <React.Fragment>
        {/* Lunch */}
    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='lch-bx'>
              <div className='ln-txb'>
                <div className='ln-hed'>
                  <h2>Lunch</h2>
                  <p>Today, 01 August, 2022</p>  
                </div>
                <div>
                  <div  className='ln-clb'>
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
                  <div className='kcl'>
                    <h1>540 Kcal</h1>
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
          <div className='diet-cl'>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView} >ViewMore</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView}>ViewMore</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView} >ViewMore</button>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Dnner */}
    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='dnr-bx'>
              <div className='dn-txb'>
                <div className='dn-hed'>
                  <h1>Todays Meals</h1>  
                </div>
                <div>
                  <div  className='dn-clb'>
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
          <div className='brk-txt'>
            <h2>Breakfast</h2>
          </div>
            {/* <div className='brk-col'>
                <div></div>
            </div> */}
            <div className='brk-cl'>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Breakfast</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>450 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView}>View More</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>lunch</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>540</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                  </button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Dinner</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>450 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
                  </button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Snacks</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>540 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn' onClick={renderRecipeInstructionsView} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )
}
