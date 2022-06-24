import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const Gallery = () => {
    return (
        <div>
            <Container className='pt-5 pb-5'>

                {/* <div className="row align-items-center">
                    <div className="row no-gutters gallery-masonry">
                        <div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_1.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_1.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_2.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_2.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_3.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_3.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_4.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_4.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-8 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-1" href="assets/images/gallery_5.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_5.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-4 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_6.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_6.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-8 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-3" href="assets/images/gallery_7.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_7.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                        <div className="col-6 col-md-4 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_8.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_8.jpg" alt="img" />
                            <h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
                    </div>
                    
                        <div className="row">
                            <div className="col-12 text-center"><a className="button gallery__button button--primary" href="#">More Images</a></div>
                        </div>
                    
                </div> */}

            </Container>
            {/* <section className="promo-primary">
					<picture>
						<source srcSet="assets/images/typography.jpg"/><img className="img--bg" src="assets/images/typography.jpg" alt="img" />
					</picture>
					<div className="promo-primary__description"> <span>Charity</span></div>
					<div className="container">
						<div className="row">
							<div className="col-auto">
								<div className="align-container">
									<div className="align-container__item"><span className="promo-primary__pre-title">Helpo</span>
										<h1 className="promo-primary__title"><span>Gallery</span> <span>Masonry</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
            {/* <!-- gallery start--> */}
            {/* <section className="section gallery">
					<div className="row no-gutters gallery-masonry">
						<div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_1.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_1.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-4 gallery-masonry__item category_1"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_2.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_2.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_3.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_3.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-4 gallery-masonry__item category_2"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_4.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_4.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-8 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-1" href="assets/images/gallery_5.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_5.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-4 gallery-masonry__item category_3"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_6.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_6.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-8 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-3" href="assets/images/gallery_7.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_7.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
						<div className="col-6 col-md-4 gallery-masonry__item category_4"><a className="gallery-masonry__img gallery-masonry__item--height-2" href="assets/images/gallery_8.jpg" data-fancybox="gallery"><img className="img--bg" src="assets/images/gallery_8.jpg" alt="img" />
							<h6 className="gallery-masonry__description">He Need Your Protection</h6></a></div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center"><a className="button gallery__button button--primary" href="#">More Images</a></div>
						</div>
					</div>
				</section> */}



        </div>
    )
}
export default Gallery