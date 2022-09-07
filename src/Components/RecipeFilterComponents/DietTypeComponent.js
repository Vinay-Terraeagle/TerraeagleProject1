import React from 'react'

export default function DietTypeComponent() {
  return (
    <React.Fragment>
         <div className="form-group diet_type mt-5 mb-5">
          <div className="row">
            <div className="col-12 align-items-center" style={{display: 'flex'}}>
              <label className="col-3 fs-18">Diet Type <span className="text-danger"> *</span></label>
              <div className="col-9">
                <div className="row">
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Keto" name="diet_type[]" defaultValue={1} />
                    <label className="custom-control-label" htmlFor="Keto"><span className=""></span><div>Keto</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Low Carb" name="diet_type[]" defaultValue={2} />
                    <label className="custom-control-label" htmlFor="Low Carb"><span className=""></span><div>Low Carb</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="Balanced" name="diet_type[]" defaultValue={3} />
                    <label className="custom-control-label" htmlFor="Balanced"><span className=""></span><div>Balanced</div></label>
                  </div>
                  <div className="col-3 d-flex">
                    <input type="checkbox" className="custom-control-input" id="High Protein" name="diet_type[]" defaultValue={4} />
                    <label className="custom-control-label" htmlFor="High Protein"><span className=""></span><div>High Protein</div></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
