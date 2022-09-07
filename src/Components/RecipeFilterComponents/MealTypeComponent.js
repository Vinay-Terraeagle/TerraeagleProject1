import React from 'react'

export default function MealTypeComponent() {
  return (
    <React.Fragment>
         <div className="form-group meal_type mt-5 mb-5">
          <div className="row ">
            <div className="col-12 align-items-center" style={{display: 'flex'}}>
              <label className="col-2 fs-18">Meal Type <span className="text-danger"> *</span></label>
              <div className="col-10">
                <div className="row">
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Breakfast" name="meal_type[]" defaultValue={1} />
                    <label className="custom-control-label" htmlFor="Breakfast"><span className=""></span><div>Breakfast</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Lunch" name="meal_type[]" defaultValue={2} />
                    <label className="custom-control-label" htmlFor="Lunch"><span className=""></span><div>Lunch</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Snacks" name="meal_type[]" defaultValue={3} />
                    <label className="custom-control-label" htmlFor="Snacks"><span className=""></span><div>Snacks</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Dinner" name="meal_type[]" defaultValue={4} />
                    <label className="custom-control-label" htmlFor="Dinner"><span className=""></span><div>Dinner</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="CX - Others" name="meal_type[]" defaultValue={5} />
                    <label className="custom-control-label" htmlFor="CX - Others"><span className=""></span><div>CX - Others</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Mid-Morning" name="meal_type[]" defaultValue={7} />
                    <label className="custom-control-label" htmlFor="Mid-Morning"><span className=""></span><div>Mid-Morning</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Mid-Evening" name="meal_type[]" defaultValue={8} />
                    <label className="custom-control-label" htmlFor="Mid-Evening"><span className=""></span><div>Mid-Evening</div></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
  