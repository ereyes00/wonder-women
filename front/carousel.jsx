var React = require('react');
var Slider = require('react-slick');
// var Carousel = require('react-responsive-carousel').Carousel;

var CarouselHome = React.createClass({
    render() {

        var settings = {
            dots: true
        }
        var style = {  
          margin: 0,
          padding: 40,
          //width: '80%',
          color: '#333',
          background: '#419be0'
        }
        return (
        
          <div>
            
            <Slider {...settings}>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
              <div><img src='http://placekitten.com/g/400/200' /></div>
            </Slider>
          </div>
        );
    }
});

export default CarouselHome;

            // <Carousel axis="horizontal|vertical" showThumbs={true|false} showArrows={true|false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            //     <div>
            //         <img src="https://yt3.ggpht.com/-nRrFamE884w/AAAAAAAAAAI/AAAAAAAAAAA/BY_Pl39uwWU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
            //         <p className="legend">Legend 1</p>
            //     </div>
            //     <div>
            //         <img src="http://www.artres.com/Doc/ART/Media/TR3/S/K/C/L/ART138918.jpg" />
            //         <p className="legend">Legend 2</p>
            //     </div>
            //     <div>
            //         <img src="https://upload.wikimedia.org/wikipedia/en/e/ea/Jean_Metzinger,_1907,_Paysage_color%C3%A9_aux_oiseaux_aquatiques,_oil_on_canvas,_74_x_99_cm,_Mus%C3%A9e_d%E2%80%99Art_Moderne_de_la_Ville_de_Paris.jpg" />
            //         <p className="legend">Legend 3</p>
            //     </div>
            // </Carousel>