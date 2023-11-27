import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/home/experience-banner.css';
import { InView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';

type CounterValue = {
    value: number,
    targetValue: number
};

type CounterRef = {
    projects: CounterValue,
    years: CounterValue,
    clients: CounterValue
};

type RenderValue = {
    projects: number,
    years: number,
    clients: number
};

const ExperienceBanner = () => {       
    const timerRef = useRef(0);   
    
    const counterRef = useRef<CounterRef>({
        projects: {
            value: 0,
            targetValue: 1000
        },
        years: {
            value: 0,
            targetValue: 15
        },
        clients: {
            value: 0,
            targetValue: 100
        },
    });    
      
    const [renderValue, setRenderValue] = useState<RenderValue>();
    
    //clear timer
    useEffect(() => {                        
        return () => {   
            clearTimeout(timerRef.current);            
        };
    }, []);

    //start timer on intersection
    const intersect = (inView: boolean) => {
        if (!inView) {
            return;
        }

        incrementValues(1, 1);        
    }

    const incrementValues = (step: number, factor: number) => {        
        incrementValue(counterRef.current.projects);
        incrementValue(counterRef.current.years);
        incrementValue(counterRef.current.clients);

        //console.log('projects', counterRef.current.projects.value);

        //copy current value to state (force render)
        setRenderValue({
            projects: Math.round(counterRef.current.projects.value),
            years: Math.round(counterRef.current.years.value),
            clients: Math.round(counterRef.current.clients.value),
        });          

        if (counterRef.current.projects.value >= counterRef.current.projects.targetValue &&
            counterRef.current.years.value >= counterRef.current.years.targetValue &&
            counterRef.current.clients.value >= counterRef.current.clients.targetValue) {
            return;
        }

        //ease out
        if (step > 75) {
            factor += factor / 20;
        } else step++            

        //call next iteration
        timerRef.current = setTimeout(() => { incrementValues(step, factor) }, step * factor);        
    }    

    const incrementValue = (counter: CounterValue) => {
        if (counter.value >= counter.targetValue) {
          return;
        }

        counter.value += counter.targetValue / 100;          
    }
    
    return (
        <InView 
            as="div" 
            className="eb-container"
            triggerOnce
            onChange={(inView: boolean) => intersect(inView)}>        
            <Container>
                <Row>
                    <Col
                        cols="12"
                        sm="4">
                        <div className="eb-text-header">{renderValue?.projects}</div>
                        <div className="eb-text">ZREALIZOWANYCH PROJEKTÓW</div>
                    </Col>
                    <Col
                        cols="12"
                        sm="4">
                        <div className="eb-text-header">{renderValue?.years}</div>
                        <div className="eb-text">LAT DOŚWIADCZENIA</div>
                    </Col>
                    <Col
                        cols="12"
                        sm="4">
                        <div className="eb-text-header">{renderValue?.clients}</div>
                        <div className="eb-text">ZADOWOLONYCH KLIENTÓW</div>
                    </Col>
                </Row> 
            </Container>
        </InView>
    );
}

export default ExperienceBanner;