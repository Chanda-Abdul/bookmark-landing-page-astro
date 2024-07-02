import { useEffect, useState } from 'react';
import { featureList } from '../consts';

export default function FeaturesPreview() {
  const [currentFeatureIdx, setCurrentFeatureIdx] = useState(0);
  const [currentfeature, setCurrentfeature] = useState(
    featureList[currentFeatureIdx]
  );

  const handleChange = (idx: number) => {
    setCurrentFeatureIdx(idx);
  };

  useEffect(() => {
    setCurrentfeature(featureList[currentFeatureIdx]);
  }, [currentFeatureIdx]);

  return (
    <>
      <form className='features__content' 
      id='feature' action=''>
        <fieldset className='features__preview'>
          {featureList.map((feature, i) => (
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

      <div className='features__img'>
        <img
          src='src/assets/images/illustration-hero.svg'
          alt='desktop illustration'
        />

        <span className='pill-background'></span>
      </div>

      <div className='features__current'>
        <h2>{currentfeature.tag}</h2>
        <p>{currentfeature.description}</p>
        <button className='btn-primary'>{currentfeature.cta}</button>
      </div>
    </>
  );
}
