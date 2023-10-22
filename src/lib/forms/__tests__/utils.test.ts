import { getChangedFields, handleDatesToString} from "@/lib/forms/utils";

describe("handleDatesToString", () => {
    it("works when the key is not not present", () => {
        const values = {
            id: 1, foo: "bar"
        }

        // @ts-expect-error: it should handle missing keys
        handleDatesToString(values, "date");
        expect(values).toEqual({
            id: 1, foo: "bar"
        })
    });

    it("works when the date is present", () => {
        const values = {
            id: 1, foo: "bar", buyDate: new Date("2023-09-29")
        }

        handleDatesToString(values, "buyDate");
        expect(values).toEqual({
            id: 1, foo: "bar", buyDate: "2023-09-29"
        })
    });
});

describe("getChangedFields", () => {
    it("should include 'id' and 'publicId' keys even when they're not changed", () => {
        const values = {
            id: 1,
            publicId: 2,
            foo: "bar",
            bar: {
                x: true,
            }
        }

        const dirtyFields = {
            foo: true
        }

        expect(getChangedFields(dirtyFields, values, [])).toEqual({
            id: 1,
            publicId: 2,
            foo: "bar",
        })
    });
    it("shouldn't include 'id' and 'publicId' when they're not in values", () => {
        const values = {
            foo: "bar",
            bar: {
                x: true,
            }
        }

        const dirtyFields = {
            foo: true
        }

        expect(getChangedFields(dirtyFields, values, [])).toEqual({
            foo: "bar",
        })
    });
    it("should get nested keys too", () => {
        const values = {
            id: 1,
            publicId: 2,
            foo: "bar",
            bar: {
                x: "bami",
            }
        }

        const dirtyFields = {
            foo: true,
            bar: {
                x: true
            }
        }

        expect(getChangedFields(dirtyFields, values, [])).toEqual({
            id: 1,
            publicId: 2,
            foo: "bar",
            bar: {
                x: "bami"
            }
        })
    });
})