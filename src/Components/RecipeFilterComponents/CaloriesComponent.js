import React from 'react'

export default function CaloriesComponent() {
  return (
    <React.Fragment>
        <div className="form-group calories  mt-5 mb-5">
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-3">Calories <span className="text-danger"> *</span></label>
              <div className="d-flex">
                <input type="number" className="form-control" autoComplete="off" name="min_cals" min={1} id="min_cals" placeholder="MIN" /><span className="col-1" />
                <input type="number" className="form-control" autoComplete="off" name="max_cals" min={1} id="max_cals" placeholder="MAX" />
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
