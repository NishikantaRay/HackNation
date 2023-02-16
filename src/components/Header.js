import React from 'react'

export default function Header() {
    return (
        <div>
            <section className="container mt-3">
                <div className="jumbotron px-3 py-4 px-sm-4 py-sm-5 bg-light rounded-3 mb-3">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </section>
        </div>
    )
}
