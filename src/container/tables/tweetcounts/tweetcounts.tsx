import { FC, Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";
interface TweetCounts {}

const TweetCounts: FC<TweetCounts> = () => {
  const [tweetData, setTweetData] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://3.111.105.54:5400/user/twitter/details"
        );
        const sortedData = res.data.data.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
        );
        setTweetData(sortedData);
      } catch (error) {
        console.error("error fetching data", error);
      }
      setLoader(false);
    };
    fetchData();
  }, []);
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
                <Button
                  type="button"
                  className="btn btn-sm ms-2 text-nowrap"
                  variant="primary"
                >
                  Download Excel
                </Button>
              </div>
            </Card.Header>
          </Card>
          {loader ? (
            <div className="d-flex justify-content-center">
              <Button
                variant=""
                className="btn btn-primary-light w-25"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm align-middle me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </Button>
            </div>
          ) : (
            <Card>
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
                      {tweetData &&
                        tweetData.map((data: any, index: number) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}.</th>
                            <td>
                              <span className="badge bg-light fs-13 text-dark">
                                {data.name}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                {data.username}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                {data.number_of_tweets}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                {data.Date}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default TweetCounts;
