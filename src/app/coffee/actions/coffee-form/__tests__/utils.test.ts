import {handleDatesToString} from "@/app/coffee/actions/coffee-form/utils";

describe("handleDatesToString", () => {
    it("works when buy date and roast date are not present", () => {
        const values = {
            id: 1, foo: "bar"
        }

        handleDatesToString(values);
        expect(values).toEqual({
            id: 1, foo: "bar"
        })
    });

    it("works when only buy date is present", () => {
        const values = {
            id: 1, foo: "bar", buyDate: new Date("2023-09-29")
        }

        handleDatesToString(values);
        expect(values).toEqual({
            id: 1, foo: "bar", buyDate: "2023-09-29"
        })
    });

    it("works when only roast date is present", () => {
        const values = {
            id: 1, foo: "bar", roastDate: new Date("2023-09-29")
        }

        handleDatesToString(values);
        expect(values).toEqual({
            id: 1, foo: "bar", roastDate: "2023-09-29"
        })
    });

    it("works when both dates are present", () => {
        const values = {
            id: 1,
            foo: "bar",
            roastDate: new Date("2023-09-29"),
            buyDate: new Date("2023-09-29"),
        }

        handleDatesToString(values);
        expect(values).toEqual({
            id: 1,
            foo: "bar",
            roastDate: "2023-09-29",
            buyDate: "2023-09-29",
        })
    });
});