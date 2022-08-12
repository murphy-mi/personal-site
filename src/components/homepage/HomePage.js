import styled from "styled-components";

const Container = styled.div`
    align-content: center;
    text-align: center;
`;

function HomePage() {
    return (
        <Container>
            <div>
                <h1>Homepage</h1>
            </div>
        </Container>
    );
}

export default HomePage;