import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import starIcon from "../assets/images/icon-star.svg";
import thankYouImage from "../assets/images/illustration-thank-you.svg";

type RadioProps = {
  rating: number;
  selectedValue: number;
};

function Radio({ rating, selectedValue }: RadioProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(rating === selectedValue);
  }, [rating, selectedValue]);

  return (
    <label key={rating} className={`circle ${checked && "checked"}`}>
      <input type="radio" name="rating" value={rating} />
      {rating}
    </label>
  );
}

export default function InteractiveRating() {
  const ratings = [1, 2, 3, 4, 5];
  const [selectedValue, setSelectedValue] = useState("");
  const [successPage, setSuccessPage] = useState(false);

  const renderCircles = () => {
    return ratings.map((rating) => (
      <Radio
        key={rating}
        rating={rating}
        selectedValue={parseInt(selectedValue)}
      />
    ));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccessPage(true);
  };

  return (
    <div className="interactive-rating">
      <div className="content">
        {successPage ? (
          <div className="success">
            <img src={thankYouImage} alt="thank you" />

            <p>You selected {selectedValue} out of 5</p>

            <h1>Thank you!</h1>

            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        ) : (
          <>
            <div className="circle">
              <img src={starIcon} alt="star icon" />
            </div>
            <div className="text">
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreclated to help us improve our offering!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="circles-wrapper" onChange={handleChange}>
                {renderCircles()}
              </div>

              <input type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
