import React from 'react'

export default function Header() {
    return (
        <div>
            <section className="container col-12 col-md-10 mt-3">
                <div className="jumbotron px-3 py-4 px-sm-4 py-sm-5 bg-light rounded-3 mb-3">
                    <h1 className="display-4 main-header">CAMPUS <br /> HEALTH  HUB</h1>
                    <p className="lead">Your One-Stop Solution for Health and Wellness on Campus</p>
                    <div className="col-2">
                        <a className="btn btn-primary-bg " href="#" role="button">Get started</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
