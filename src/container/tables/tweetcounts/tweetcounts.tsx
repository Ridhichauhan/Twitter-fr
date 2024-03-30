import { FC, Fragment,} from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import {
  Table2data,
} from "./tabledata";

interface TweetCounts {}

const TweetCounts: FC<TweetCounts> = () => {
  return (
    <Fragment>
      <Col>
      <Card.Header className="p-3"></Card.Header>
      </Col> 
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-flex justify-content-between">
              <h1 className="fs-16 fw-semibold">Tweet Counts</h1>
             <div className="d-flex justify-content-end">
             <div className="">
                <InputGroup>
                  <Form.Control
                    type="text"
                    className="bg-light border-0"
                    placeholder="Search"
                  />
                  <Button
                    variant="light"
                    className="btn btn-sm"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="ri-search-line text-muted"></i>
                  </Button>
                </InputGroup>
              </div>
              <Button type="button" className="btn btn-sm ms-2 text-nowrap" variant="primary">
                Download Excel
              </Button>
             </div>
            
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered className="table text-nowrap  border-primary">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">UserName</th>
                      <th scope="col">Tweet Counts</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Table2data.map((idx) => (
                      <tr key={Math.random()}>
                        <th scope="row">{idx.id}.</th>
                        <td>
                          <span className="badge bg-light fs-13 text-dark">
                            {idx.name}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {idx.username}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {idx.tweetcount}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {idx.date}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Fragment>
  );
};

export default TweetCounts;
