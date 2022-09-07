import React from 'react'

export default function MustExcludeComponent() {
  return (
    <React.Fragment>
        <div className="form-group must_exclude mt-5 mb-5">
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-4 fs-18">Must Exclude <span className="text-danger"> *</span></label>
              <textarea className="form-control ui-autocomplete-input" name="must_exclude" rows={5} id="exclude" placeholder="Ingredients" autoComplete="off" defaultValue={""} />
            </div>
          </div>
          {/* <div className="form-group col-sm-offset-3 col-sm-9">
            <div className="text-danger exclude-error" style={{display: 'none', marginLeft: '45%'}} />
          </div> */}
        </div>
    </React.Fragment>
  )
}
