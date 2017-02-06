var React = require('react');
// var Slider = require('react-slick');
var Carousel = require('react-responsive-carousel').Carousel;

/////// carousel not working yet!!
var CarouselHome = React.createClass({
  onChange: function(){
    console.log('onChange', arguments)
  },
  onClickItem: function(){
    console.log('onClick', arguments)
  },
    render() {
      return (
          <Carousel axis="horizontal" showThumbs={false} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem}>
            <div>
              <img src="https://yt3.ggpht.com/-nRrFamE884w/AAAAAAAAAAI/AAAAAAAAAAA/BY_Pl39uwWU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
              <p className="legend">Legend 1</p>
            </div>

            <div>
              <img src="http://www.artres.com/Doc/ART/Media/TR3/S/K/C/L/ART138918.jpg" />
              <p className="legend">Legend 2</p>
            </div>

            <div>
              <img src="https://upload.wikimedia.org/wikipedia/en/e/ea/Jean_Metzinger,_1907,_Paysage_color%C3%A9_aux_oiseaux_aquatiques,_oil_on_canvas,_74_x_99_cm,_Mus%C3%A9e_d%E2%80%99Art_Moderne_de_la_Ville_de_Paris.jpg" />
              <p className="legend">Legend 3</p>
             </div>

          </Carousel>
      )
    }
});

export default CarouselHome;

