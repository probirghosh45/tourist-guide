import React from 'react';

const RequestQoute = () => {
    return (
       <>
         <section class=" bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="card card-body pt-5 border-0 bg-transparent">
                        <h5 class="text-orange fw-bolder mt-3">GET A QUOTE</h5>
                        <h1 class="fw-bolder display-6 mt-3 mb-3 card-title">Request A Free Quote</h1>
                        <p class="text-muted">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et.
                            Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum
                            et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div class="row fw-bolder">
                            <div class="col-md-4 ">
                                <h1 class="fw-bolder text-orange">225</h1>
                                <p>SKilled Experts</p>
                            </div>
                            <div class="col-md-4">
                                <h1 class="fw-bolder text-orange">1050</h1>
                                <p>Happy Clients</p>
                            </div>
                            <div class="col-md-4">
                                <h1 class="fw-bolder text-orange">2500</h1>
                                <p>Complete Tour</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card card-body bg-orange rounded-0 free-quote-form">
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <input type="text" class="form-control form-control-lg rounded-0" placeholder="Your Name" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <input type="email" class="form-control form-control-lg rounded-0" placeholder="Your Email" />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-12">
                                <select class="form-control form-control-lg rounded-0">
                                    <option value="">Select A Service</option>
                                    <option>Service 1</option>
                                    <option>Service 2</option>
                                    <option>Service 3</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col">
                                <input type="submit" class="btn btn-dark btn-lg w-75 rounded-0" value="Get A Quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

       </>
    );
};

export default RequestQoute;