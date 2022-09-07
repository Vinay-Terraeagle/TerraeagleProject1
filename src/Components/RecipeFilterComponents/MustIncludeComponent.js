import React from 'react'

export default function MustIncludeComponent() {
  return (
    <React.Fragment>
        <div className="form-group must_include mt-5 mb-5">
          <div className="row">
            <div className="col-12" style={{display: 'flex'}}>
              <label className="col-4">Must Include <span className="text-danger"> *</span></label>
              <div className="col-8">
                <textarea className="form-control col-sm-5 ui-autocomplete-input" name="must_include" rows={5} id="include" placeholder="Ingredients" autoComplete="off" defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="form-group col-sm-offset-3 col-sm-9">
            <div className="text-danger include-error" style={{display: 'none', marginLeft: '45%'}} />
          </div>
        </div>
    </React.Fragment>
  )
}
