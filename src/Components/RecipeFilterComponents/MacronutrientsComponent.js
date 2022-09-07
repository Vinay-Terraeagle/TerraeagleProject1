import React from 'react'

export default function MacronutrientsComponent() {
  return (
    <React.Fragment>
        <div className="form-group macronutrients mt-5 mb-5">
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-2">Carbs (g) <span className="text-danger"> *</span></label>
              <div className="d-flex">
                <input type="number" className="form-control" autoComplete="off" name="min_carbs" min={1} id="min_carbs" placeholder="MIN" /><span className="" />
                <span class="col-1"></span>
                <input type="number" className="form-control" autoComplete="off" name="max_carbs" min={1} id="max_carbs" placeholder="MAX" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-2">Fats (g) <span className="text-danger"> *</span></label>
              <div className="d-flex">
                <input type="number" className="form-control" autoComplete="off" name="min_fats" min={1} id="min_fats" placeholder="MIN" /><span className="col-1" />
                <input type="number" className="form-control" autoComplete="off" name="max_fats" min={1} id="max_fats" placeholder="MAX" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-2">Protein (g) <span className="text-danger"> *</span></label>
              <div className="d-flex">
                <input type="number" className="form-control" autoComplete="off" name="min_protein" min={1} id="min_protein" placeholder="MIN" /><span className="col-1" />
                <input type="number" className="form-control" autoComplete="off" name="max_protein" min={1} id="max_protein" placeholder="MAX" />
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
