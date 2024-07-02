import { useEffect, useState } from 'react';
import { featureListBasic } from '../consts';
import Feature from './Feature.astro';

export default function FeaturesPreview() {
  const [currentFeatureIdx, setCurrentFeatureIdx] = useState(0);
  const [currentfeature, setCurrentfeature] = useState(
    featureListBasic[currentFeatureIdx]
  );

  const handleChange = (idx: number) => {
    setCurrentFeatureIdx(idx);
  };

  useEffect(() => {
    setCurrentfeature(featureListBasic[currentFeatureIdx]);
  }, [currentFeatureIdx]);

  return (
    <>
      <form className='features__content' id='feature' action=''>
        <fieldset className='features__preview'>
          {featureListBasic.map((feature, i) => (
            <>
              <input
                className='features__preview--item'
                type='radio'
                name={feature.feature}
                id={feature.feature}
                value={i}
                checked={currentFeatureIdx === i ? true : false}
                onChange={() => handleChange(i)}
              />
              <label htmlFor={feature.feature}>{feature.feature}</label>
            </>
          ))}
        </fieldset>
      </form>

      <div className='feature'>
        <div className='feature__img'>
          <img src={currentfeature.illustration} alt={currentfeature.feature} />

          <span className='pill-background'></span>
        </div>

        <h3 className='feature__title'>{currentfeature.feature}</h3>

        <h4 className='feature__tag'>{currentfeature.tag}</h4>
        <p className='feature__description'>{currentfeature.description}</p>
        {currentfeature.cta && (
          <button className='btn-primary'>{currentfeature.cta}</button>
        )}
      </div>
    </>
  );
}
