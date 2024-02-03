import User from "./User";

const About = () => {
  return (
    <div>
      <div className="flex flex-wrap my-4 justify-center">
        <User
          name="Samarth"
          image="https://media.licdn.com/dms/image/C4D22AQERP1A7vy1R7g/feedshare-shrink_800/0/1637899925902?e=2147483647&v=beta&t=p9p2mGrSaSCpWvEDttMa0-ePJvUX8_s6YSgQfb2g1HA"
          location="Noida"
          age="30"
          position="Director"
          rating="5 / 5"
        />
        <User
          name="Shreya"
          image="https://avatars.githubusercontent.com/u/20899802?v=4"
          location="Noida"
          age="26"
          position="CEO"
          rating="5 / 5"
        />
        <User
          name="Arvind"
          image="https://cricheroes.in/assets/images/default-player.jpg"
          location="Noida"
          age="57"
          position="CFO"
          rating="5 / 5"
        />
        <User
          name="Sangeeta"
          image="https://i.pinimg.com/736x/ae/45/d1/ae45d19f3216598a4a3cb1afb452a7cd.jpg"
          location="Noida"
          age="56"
          position="CTO"
          rating="5 / 5"
        />
        <User
          name="Himanshi"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XgZozAHnaQB3xY7KOIgecje6Bch983XrhA&usqp=CAU"
          location="Noida"
          age="56"
          position="CHR"
          rating="5 / 5"
        />
      </div>
    </div>
  );
};

export default About;
