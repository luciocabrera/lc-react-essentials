import PropTypes from 'prop-types';
import { ParallaxBlockBody } from './styles';

const ParallaxBlock = props => (
  <>
    <ParallaxBlockBody
      opacityBlock={props.opacityBlock}
      heightBlock={props.heightBlock}
      bgImgBlock={props.bgImgBlock}
      bgRepeatBlock={props.bgRepeatBlock}
    >
      {props.children}
    </ParallaxBlockBody>
    {props.footer}
  </>
);

ParallaxBlock.propTypes = {
  /** Block's Body Opacity.
   * It is the CSS opacity property
   * that sets the opacity level for the Parallax Block body.
   */
  opacityBlock: PropTypes.number,
  /** Block's Body height.
   * It is the CSS min-height property
   * that sets the minimum height of the Parallax Block body.
   */
  heightBlock: PropTypes.string,
  /** Block's Body background image.
   * It is the CSS background-image property
   * that sets one or more background images for the Parallax Block body.
   */
  bgImgBlock: PropTypes.string.isRequired,
  /** Block's Body background image repeat.
   * It is the CSS background-repeat property
   * that sets if/how a background image will be repeated in the Parallax Block body.
   */
  bgRepeatBlock: PropTypes.oneOf([
    'repeat',
    'repeat-x',
    'repeat-y',
    'no-repeat',
    'space',
    'round',
    'initial',
    'inherit'
  ]),
  /** Block's Body children.
   * It is anything that can be rendered as children
   * of the Paralax Block body and is shown inside the Block body.
   */
  children: PropTypes.node.isRequired,
  /** Block's footer
   * It is anything that can be rendered in React
   * and is shown bellow the Block body (outside).
   */
  footer: PropTypes.node
};

ParallaxBlock.defaultProps = {
  opacityBlock: 1,
  heightBlock: `100vh`,
  bgRepeatBlock: `no-repeat`
};

export default ParallaxBlock;
